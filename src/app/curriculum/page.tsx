import { Shell } from '@/components/shell';
import { SubjectCard } from '@/components/subject-card';
import { SUBJECT_DEFAULTS } from '@/lib/constants';

export default function CurriculumPage() {
  return <Shell><h1 className="text-2xl font-bold">Curriculum Explorer</h1><div className="mt-5 grid gap-4 md:grid-cols-3">{SUBJECT_DEFAULTS.map((s,i)=><SubjectCard key={s} id={String(i+1)} name={s} emoji={['🔢','🧪','📚','🌍','🪔','💻'][i]} progress={50+i*5} topics={3} />)}</div></Shell>;
}
