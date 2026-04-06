import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * 채용 포지션 테이블
 * 회사의 채용 중인 포지션 정보를 관리합니다.
 */
export const positions = mysqlTable("positions", {
  id: int("id").autoincrement().primaryKey(),
  dept: varchar("dept", { length: 100 }).notNull(), // 부서명
  role: varchar("role", { length: 100 }).notNull(), // 직무명
  type: varchar("type", { length: 50 }).notNull().default("정규직"), // 고용 형태
  location: varchar("location", { length: 100 }).notNull(), // 근무지
  description: text("description").notNull(), // 직무 설명
  tags: text("tags"), // JSON 형식의 태그 배열
  isActive: boolean("isActive").default(true).notNull(), // 활성 여부
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Position = typeof positions.$inferSelect;
export type InsertPosition = typeof positions.$inferInsert;

/**
 * 지원자 테이블
 * 채용 포지션에 지원한 지원자 정보를 관리합니다.
 */
export const applicants = mysqlTable("applicants", {
  id: int("id").autoincrement().primaryKey(),
  positionId: int("positionId").notNull(), // 지원 포지션 ID
  name: varchar("name", { length: 100 }).notNull(), // 지원자명
  email: varchar("email", { length: 320 }).notNull(), // 이메일
  phone: varchar("phone", { length: 20 }), // 전화번호
  resumeUrl: text("resumeUrl"), // 이력서 S3 URL
  portfolioUrl: text("portfolioUrl"), // 포트폴리오 URL
  aiUsageExperience: text("aiUsageExperience"), // AI 활용 경험 (자유 텍스트)
  status: mysqlEnum("status", ["applied", "reviewing", "interview", "rejected", "offered"]).default("applied").notNull(), // 심사 상태
  notes: text("notes"), // 관리자 메모
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Applicant = typeof applicants.$inferSelect;
export type InsertApplicant = typeof applicants.$inferInsert;

/**
 * 파일 메타데이터 테이블
 * 지원자가 업로드한 파일 정보를 관리합니다.
 */
export const uploadedFiles = mysqlTable("uploadedFiles", {
  id: int("id").autoincrement().primaryKey(),
  applicantId: int("applicantId").notNull(), // 지원자 ID
  fileName: varchar("fileName", { length: 255 }).notNull(), // 원본 파일명
  fileKey: varchar("fileKey", { length: 255 }).notNull(), // S3 파일 키
  fileUrl: text("fileUrl").notNull(), // S3 파일 URL
  fileSize: int("fileSize").notNull(), // 파일 크기 (바이트)
  mimeType: varchar("mimeType", { length: 100 }).notNull(), // MIME 타입
  uploadedBy: varchar("uploadedBy", { length: 100 }), // 업로드한 사용자
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type UploadedFile = typeof uploadedFiles.$inferSelect;
export type InsertUploadedFile = typeof uploadedFiles.$inferInsert;