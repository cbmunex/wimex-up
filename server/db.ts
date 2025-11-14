import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, modules, lessons, exercises, studentProgress, pronunciationResults } from "../drizzle/schema";
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

/**
 * Funções para gerenciar módulos do curso
 */
export async function getModulesByLevel(level: "basic" | "intermediate") {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(modules).where(eq(modules.level, level));
}

export async function getModuleById(moduleId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(modules).where(eq(modules.id, moduleId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Funções para gerenciar lições
 */
export async function getLessonsByModule(moduleId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(lessons).where(eq(lessons.moduleId, moduleId));
}

export async function getLessonById(lessonId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(lessons).where(eq(lessons.id, lessonId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Funções para gerenciar exercícios
 */
export async function getExercisesByLesson(lessonId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(exercises).where(eq(exercises.lessonId, lessonId));
}

export async function getExerciseById(exerciseId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(exercises).where(eq(exercises.id, exerciseId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Funções para gerenciar progresso do aluno
 */
export async function getUserProgress(userId: number, moduleId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(studentProgress)
    .where(and(eq(studentProgress.userId, userId), eq(studentProgress.moduleId, moduleId)))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}

export async function getAllUserProgress(userId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(studentProgress).where(eq(studentProgress.userId, userId));
}

/**
 * Funções para gerenciar resultados de pronúncia
 */
export async function savePronunciationResult(data: {
  userId: number;
  exerciseId: number;
  audioUrl: string;
  transcription: string;
  referenceText: string;
  accuracy: number;
  isPassed: boolean;
  feedback: string;
  attempts: number;
}) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.insert(pronunciationResults).values(data);
  return result;
}

export async function getPronunciationResult(userId: number, exerciseId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db
    .select()
    .from(pronunciationResults)
    .where(and(eq(pronunciationResults.userId, userId), eq(pronunciationResults.exerciseId, exerciseId)))
    .limit(1);

  return result.length > 0 ? result[0] : undefined;
}
