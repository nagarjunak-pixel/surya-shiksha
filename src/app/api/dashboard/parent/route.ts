export async function GET() {
  return Response.json({ children: 1, weeklyMinutes: [30, 45, 25, 50, 40, 60, 35], struggleTopics: ['Fractions', 'Forces'] });
}
