import { ProgressCharts } from '@/components/progress-charts';
import { Shell } from '@/components/shell';

export default function ParentDashboard() {
  return <Shell role="PARENT"><h1 className="text-2xl font-bold">Parent Dashboard 👨‍👩‍👧</h1><div className="card-surya mt-4">Children list • mastery overview • struggle topics</div><div className="mt-4"><ProgressCharts /></div></Shell>;
}
