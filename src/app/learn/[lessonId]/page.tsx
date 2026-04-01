import { Shell } from '@/components/shell';
import ReactMarkdown from 'react-markdown';

const content = '# Lesson\n\nThis is a **SURYA** lesson with comprehension checks and guided hints.';

export default function LessonPage({ params }: { params: { lessonId: string } }) {
  return <Shell><h1 className="text-2xl font-bold">Lesson {params.lessonId}</h1><div className="card-surya mt-4 prose"><ReactMarkdown>{content}</ReactMarkdown><button className="mt-4 rounded bg-surya-500 px-3 py-2 text-white">Ask SURYA</button></div></Shell>;
}
