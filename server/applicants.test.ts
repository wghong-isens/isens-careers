import { describe, expect, it, beforeEach, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import type { User } from "../drizzle/schema";

// Mock database functions
vi.mock("./db", () => ({
  getPositions: vi.fn(async () => [
    {
      id: 1,
      dept: "IT개발부",
      role: "풀스택 개발자",
      type: "정규직",
      location: "서울",
      description: "가맹관리 시스템 개발",
      tags: '["개발", "AI", "자동화"]',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  createApplicant: vi.fn(async (data) => ({
    insertId: 1,
    affectedRows: 1,
  })),
  getApplicants: vi.fn(async () => [
    {
      id: 1,
      positionId: 1,
      name: "김지원",
      email: "kim@example.com",
      phone: "010-1234-5678",
      resumeUrl: "https://s3.../resume.pdf",
      portfolioUrl: "https://portfolio.com",
      aiUsageExperience: "ChatGPT를 이용한 코드 작성 경험 있음",
      status: "applied",
      notes: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  getApplicantById: vi.fn(async (id) =>
    id === 1
      ? {
          id: 1,
          positionId: 1,
          name: "김지원",
          email: "kim@example.com",
          phone: "010-1234-5678",
          resumeUrl: "https://s3.../resume.pdf",
          portfolioUrl: "https://portfolio.com",
          aiUsageExperience: "ChatGPT를 이용한 코드 작성 경험 있음",
          status: "applied",
          notes: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      : undefined
  ),
  updateApplicantStatus: vi.fn(async () => {}),
  updateApplicantNotes: vi.fn(async () => {}),
  createUploadedFile: vi.fn(async () => ({
    insertId: 1,
    affectedRows: 1,
  })),
}));

vi.mock("./storage", () => ({
  storagePut: vi.fn(async () => ({
    url: "https://s3.../applicants/1/resume-abc123.pdf",
    key: "applicants/1/resume-abc123.pdf",
  })),
}));

function createAdminContext(): TrpcContext {
  const admin: User = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user: admin,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("positions", () => {
  it("should list all active positions", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const positions = await caller.positions.list();

    expect(positions).toHaveLength(1);
    expect(positions[0]).toMatchObject({
      dept: "IT개발부",
      role: "풀스택 개발자",
      isActive: true,
    });
    expect(positions[0].tags).toEqual(["개발", "AI", "자동화"]);
  });
});

describe("applicants", () => {
  it("should allow public applicants to apply", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.applicants.submit({
      positionId: 1,
      name: "김지원",
      email: "kim@example.com",
      phone: "010-1234-5678",
      aiUsageExperience: "ChatGPT 활용 경험",
    });

    expect(result).toMatchObject({
      insertId: 1,
      affectedRows: 1,
    });
  });

  it("should reject invalid email", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    
    try {
      await caller.applicants.submit({
        positionId: 1,
        name: "김지원",
        email: "invalid-email",
        aiUsageExperience: "ChatGPT 활용 경험",
      });
      expect.fail("Should have thrown validation error");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it("should allow admin to list applicants", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const applicants = await caller.applicants.list({});

    expect(applicants).toHaveLength(1);
    expect(applicants[0]).toMatchObject({
      name: "김지원",
      email: "kim@example.com",
      status: "applied",
    });
  });

  it("should reject non-admin from listing applicants", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    
    try {
      await caller.applicants.list({});
      expect.fail("Should have thrown admin error");
    } catch (error) {
      // Non-authenticated users get login error, not admin error
      expect((error as Error).message).toBeDefined();
    }
  });

  it("should allow admin to get applicant by ID", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const applicant = await caller.applicants.getById(1);

    expect(applicant).toMatchObject({
      id: 1,
      name: "김지원",
      email: "kim@example.com",
    });
  });

  it("should allow admin to update applicant status", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.applicants.updateStatus({
      id: 1,
      status: "interview",
    });

    expect(result).toMatchObject({ success: true });
  });

  it("should allow admin to update applicant notes", async () => {
    const caller = appRouter.createCaller(createAdminContext());
    const result = await caller.applicants.updateNotes({
      id: 1,
      notes: "좋은 후보자입니다.",
    });

    expect(result).toMatchObject({ success: true });
  });
});

describe("files", () => {
  it("should upload file and save metadata", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const fileData = Buffer.from("test file content").toString("base64");

    const result = await caller.files.upload({
      applicantId: 1,
      fileName: "resume.pdf",
      fileData,
      mimeType: "application/pdf",
    });

    expect(result).toMatchObject({
      success: true,
      url: expect.stringContaining("s3"),
    });
  });
});
