import { ProgressCharts } from '@/components/progress-charts';
import { Shell } from '@/components/shell';

export default function ProgressPage() {
  return <Shell><h1 className="text-2xl font-bold">Progress Tracker 📈</h1><div className="card-surya mt-4">Mastery heatmap • achievements • time tracking.</div><div className="mt-4"><ProgressCharts /></div></Shell>;
}
