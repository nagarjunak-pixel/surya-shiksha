import { prisma } from '@/lib/prisma';

export async function GET(_: Request, { params }: { params: { lessonId: string } }) {
  const lesson = await prisma.lesson.findUnique({ where: { id: params.lessonId } });
  return Response.json(lesson);
}

export async function POST(_: Request, { params }: { params: { lessonId: string } }) {
  return Response.json({ lessonId: params.lessonId, completed: true });
}
