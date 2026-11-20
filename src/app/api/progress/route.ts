import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  const progress = await prisma.studentProgress.findMany({ orderBy: { date: 'asc' }, take: 30 });
  return Response.json(progress);
}
