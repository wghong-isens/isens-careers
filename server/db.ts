import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, positions, applicants, uploadedFiles, Applicant, Position, UploadedFile } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============ Positions ============

export async function getPositions(activeOnly = true) {
  const db = await getDb();
  if (!db) return [];

  const query = db.select().from(positions);
  if (activeOnly) {
    return await query.where(eq(positions.isActive, true)).orderBy(desc(positions.createdAt));
  }
  return await query.orderBy(desc(positions.createdAt));
}

export async function getPositionById(id: number): Promise<Position | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(positions).where(eq(positions.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createPosition(data: {
  dept: string;
  role: string;
  type: string;
  location: string;
  description: string;
  tags?: string;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(positions).values(data);
  return result;
}

// ============ Applicants ============

export async function getApplicants(filters?: {
  positionId?: number;
  status?: string;
}) {
  const db = await getDb();
  if (!db) return [];

  let query = db.select().from(applicants) as any;

  if (filters?.positionId) {
    query = query.where(eq(applicants.positionId, filters.positionId));
  }
  if (filters?.status) {
    query = query.where(eq(applicants.status, filters.status as any));
  }

  return await query.orderBy(desc(applicants.createdAt));
}

export async function getApplicantById(id: number): Promise<Applicant | undefined> {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(applicants).where(eq(applicants.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function createApplicant(data: {
  positionId: number;
  name: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  portfolioUrl?: string;
  aiUsageExperience?: string;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(applicants).values({
    ...data,
    status: "applied",
  });
  return result;
}

export async function updateApplicantStatus(id: number, status: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(applicants).set({ status: status as any }).where(eq(applicants.id, id));
}

export async function updateApplicantNotes(id: number, notes: string) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  await db.update(applicants).set({ notes }).where(eq(applicants.id, id));
}

// ============ Uploaded Files ============

export async function createUploadedFile(data: {
  applicantId: number;
  fileName: string;
  fileKey: string;
  fileUrl: string;
  fileSize: number;
  mimeType: string;
  uploadedBy?: string;
}) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(uploadedFiles).values(data);
  return result;
}

export async function getUploadedFilesByApplicant(applicantId: number): Promise<UploadedFile[]> {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(uploadedFiles).where(eq(uploadedFiles.applicantId, applicantId)).orderBy(desc(uploadedFiles.createdAt));
}
