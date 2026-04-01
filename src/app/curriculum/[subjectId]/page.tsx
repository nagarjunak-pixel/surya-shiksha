import { MasteryBadge } from '@/components/mastery-badge';
import { Shell } from '@/components/shell';

export default function SubjectPage({ params }: { params: { subjectId: string } }) {
  return <Shell><h1 className="text-2xl font-bold">Subject {params.subjectId}</h1><div className="mt-4 space-y-3">{[1,2,3].map((t)=><div key={t} className="card-surya flex items-center justify-between"><div><p className="font-semibold">Topic {t}</p><p className="text-sm text-slate-500">Prerequisites and concept graph ready.</p></div><MasteryBadge level={['UNDERSTAND','SOLVE','APPLY'][t-1]} /></div>)}</div></Shell>;
}
