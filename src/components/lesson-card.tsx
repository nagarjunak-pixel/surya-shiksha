import Link from 'next/link';

export function LessonCard({ id, title, type, difficulty }: { id: string; title: string; type: string; difficulty: number }) {
  return (
    <Link href={`/learn/${id}`} className="card-surya block">
      <p className="text-xs uppercase text-slate-500">{type}</p>
      <h4 className="mt-1 font-semibold">{title}</h4>
      <p className="mt-2 text-sm">Difficulty: {'⭐'.repeat(difficulty)}</p>
    </Link>
  );
}
