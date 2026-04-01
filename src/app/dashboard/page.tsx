import { Shell } from '@/components/shell';
import { SubjectCard } from '@/components/subject-card';

export default function DashboardPage() {
  return <Shell><h1 className="text-2xl font-bold">Welcome back Arjun 🔥 Streak: 5 | XP: 860</h1><div className="mt-6 grid gap-4 md:grid-cols-3">{['Math','Science','English'].map((s,i)=><SubjectCard key={s} id={String(i+1)} name={s} emoji={['🔢','🧪','📘'][i]} progress={65+i*10} topics={3} />)}</div><div className="card-surya mt-6">Continue Learning • Recent Activity • Daily Goals</div></Shell>;
}
