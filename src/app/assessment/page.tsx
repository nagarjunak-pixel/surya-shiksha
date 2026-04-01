import Link from 'next/link';
import { Shell } from '@/components/shell';

export default function AssessmentsPage() {
  return <Shell><h1 className="text-2xl font-bold">Assessments</h1><div className="mt-4 grid gap-3">{[1,2,3].map((i)=><Link key={i} className="card-surya" href={`/assessment/${i}`}>Quiz {i} • 5 MCQs • 15 min</Link>)}</div></Shell>;
}
