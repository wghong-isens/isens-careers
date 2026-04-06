import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { z } from "zod";
import { getPositions, createApplicant, getApplicants, getApplicantById, updateApplicantStatus, updateApplicantNotes, createUploadedFile } from "./db";
import { storagePut } from "./storage";
import { nanoid } from "nanoid";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  positions: router({
    list: publicProcedure.query(async () => {
      const positions = await getPositions(true);
      return positions.map(p => ({
        ...p,
        tags: p.tags ? JSON.parse(p.tags) : []
      }));
    }),
  }),

  applicants: router({
    submit: publicProcedure
      .input(z.object({
        positionId: z.number(),
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().optional(),
        portfolioUrl: z.string().url().optional(),
        aiUsageExperience: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const result = await createApplicant({
          positionId: input.positionId,
          name: input.name,
          email: input.email,
          phone: input.phone,
          portfolioUrl: input.portfolioUrl,
          aiUsageExperience: input.aiUsageExperience,
        });
        return result;
      }),

    list: protectedProcedure
      .input(z.object({
        positionId: z.number().optional(),
        status: z.string().optional(),
      }).optional())
      .query(async ({ ctx, input }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Admin only');
        }
        return await getApplicants(input);
      }),

    getById: protectedProcedure
      .input(z.number())
      .query(async ({ ctx, input }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Admin only');
        }
        return await getApplicantById(input);
      }),

    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(['applied', 'reviewing', 'interview', 'rejected', 'offered']),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Admin only');
        }
        await updateApplicantStatus(input.id, input.status);
        return { success: true };
      }),

    updateNotes: protectedProcedure
      .input(z.object({
        id: z.number(),
        notes: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        if (ctx.user?.role !== 'admin') {
          throw new Error('Admin only');
        }
        await updateApplicantNotes(input.id, input.notes);
        return { success: true };
      }),
  }),

  files: router({
    upload: publicProcedure
      .input(z.object({
        applicantId: z.number(),
        fileName: z.string(),
        fileData: z.string(),
        mimeType: z.string(),
      }))
      .mutation(async ({ input }) => {
        try {
          const buffer = Buffer.from(input.fileData, 'base64');
          const fileSize = buffer.length;

          const fileKey = `applicants/${input.applicantId}/${nanoid()}-${input.fileName}`;
          const { url } = await storagePut(fileKey, buffer, input.mimeType);

          await createUploadedFile({
            applicantId: input.applicantId,
            fileName: input.fileName,
            fileKey,
            fileUrl: url,
            fileSize,
            mimeType: input.mimeType,
          });

          return {
            success: true,
            url,
            fileKey,
          };
        } catch (error) {
          console.error('File upload error:', error);
          throw new Error('Failed to upload file');
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
