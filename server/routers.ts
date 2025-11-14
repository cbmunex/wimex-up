import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import {
  getModulesByLevel,
  getModuleById,
  getLessonsByModule,
  getLessonById,
  getExercisesByLesson,
  getExerciseById,
  getUserProgress,
  getAllUserProgress,
  savePronunciationResult,
  getPronunciationResult,
} from "./db";
import { z } from "zod";

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

  /**
   * Rotas para gerenciar módulos do curso
   */
  course: router({
    /**
     * Obter todos os módulos de um nível específico
     */
    getModulesByLevel: publicProcedure
      .input(z.enum(["basic", "intermediate"]))
      .query(async ({ input }) => {
        return await getModulesByLevel(input);
      }),

    /**
     * Obter detalhes de um módulo específico
     */
    getModuleById: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await getModuleById(input);
      }),

    /**
     * Obter todas as lições de um módulo
     */
    getLessonsByModule: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await getLessonsByModule(input);
      }),

    /**
     * Obter detalhes de uma lição específica
     */
    getLessonById: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await getLessonById(input);
      }),

    /**
     * Obter todos os exercícios de uma lição
     */
    getExercisesByLesson: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await getExercisesByLesson(input);
      }),

    /**
     * Obter detalhes de um exercício específico
     */
    getExerciseById: publicProcedure
      .input(z.number())
      .query(async ({ input }) => {
        return await getExerciseById(input);
      }),
  }),

  /**
   * Rotas para gerenciar progresso do aluno
   */
  progress: router({
    /**
     * Obter progresso do aluno em um módulo específico
     */
    getModuleProgress: protectedProcedure
      .input(z.number())
      .query(async ({ input, ctx }) => {
        if (!ctx.user?.id) throw new Error("User not authenticated");
        return await getUserProgress(ctx.user.id, input);
      }),

    /**
     * Obter todo o progresso do aluno
     */
    getAllProgress: protectedProcedure
      .query(async ({ ctx }) => {
        if (!ctx.user?.id) throw new Error("User not authenticated");
        return await getAllUserProgress(ctx.user.id);
      }),
  }),

  /**
   * Rotas para gerenciar resultados de pronúncia
   */
  pronunciation: router({
    /**
     * Salvar resultado de pronúncia
     */
    saveResult: protectedProcedure
      .input(z.object({
        exerciseId: z.number(),
        audioUrl: z.string(),
        transcription: z.string(),
        referenceText: z.string(),
        accuracy: z.number().min(0).max(100),
        isPassed: z.boolean(),
        feedback: z.string(),
        attempts: z.number().min(1),
      }))
      .mutation(async ({ input, ctx }) => {
        if (!ctx.user?.id) throw new Error("User not authenticated");
        return await savePronunciationResult({
          userId: ctx.user.id,
          exerciseId: input.exerciseId,
          audioUrl: input.audioUrl,
          transcription: input.transcription,
          referenceText: input.referenceText,
          accuracy: input.accuracy,
          isPassed: input.isPassed,
          feedback: input.feedback,
          attempts: input.attempts,
        });
      }),

    /**
     * Obter resultado de pronúncia de um exercício
     */
    getResult: protectedProcedure
      .input(z.number())
      .query(async ({ input, ctx }) => {
        if (!ctx.user?.id) throw new Error("User not authenticated");
        return await getPronunciationResult(ctx.user.id, input);
      }),
  }),
});

export type AppRouter = typeof appRouter;
