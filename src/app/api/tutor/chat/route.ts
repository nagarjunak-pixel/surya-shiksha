import { agents } from '@/lib/agents';

export async function POST(req: Request) {
  const body = await req.json();
  const result = await agents.PersonalTutorAgent.run(body.message ?? 'Help me learn');
  return Response.json(result);
}
