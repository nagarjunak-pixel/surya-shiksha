import { prisma } from '@/lib/prisma';

export async function GET() {
  const progress = await prisma.studentProgress.findMany({ orderBy: { date: 'asc' }, take: 30 });
  return Response.json(progress);
}
