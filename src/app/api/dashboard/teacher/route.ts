export async function GET() {
  return Response.json({ pendingReviews: 4, studentsAtRisk: 3, avgMastery: 68 });
}
