import Link from 'next/link';

export function SubjectCard({ id, name, emoji, progress, topics }: { id: string; name: string; emoji: string; progress: number; topics: number }) {
  return (
    <Link href={`/curriculum/${id}`} className="card-surya block">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{emoji} {name}</h3>
        <span className="text-sm text-slate-500">{topics} topics</span>
      </div>
      <div className="mt-3 h-2 w-full rounded-full bg-orange-100">
        <div className="h-2 rounded-full bg-surya-500" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-2 text-sm text-slate-600">Mastery progress: {progress}%</p>
    </Link>
  );
}
