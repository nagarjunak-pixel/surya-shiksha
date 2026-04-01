import { agents } from '@/lib/agents';

export async function POST(req: Request) {
  const body = await req.json();
  const result = await agents.LearningPathAgent.run(JSON.stringify(body));
  return Response.json(result);
}
