export function MasteryBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    UNDERSTAND: 'bg-blue-100 text-blue-700',
    SOLVE: 'bg-green-100 text-green-700',
    APPLY: 'bg-yellow-100 text-yellow-700',
    ANALYZE: 'bg-orange-100 text-orange-700',
    CREATE: 'bg-purple-100 text-purple-700'
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${colors[level] ?? 'bg-slate-100 text-slate-700'}`}>{level}</span>;
}
