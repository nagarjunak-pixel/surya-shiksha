import { prisma } from '@/lib/prisma';

export async function GET(_: Request, { params }: { params: { quizId: string } }) {
  const quiz = await prisma.assessment.findUnique({ where: { id: params.quizId } });
  return Response.json(quiz);
}

export async function POST(req: Request, { params }: { params: { quizId: string } }) {
  const payload = await req.json();
  return Response.json({ quizId: params.quizId, submitted: true, payload });
}
