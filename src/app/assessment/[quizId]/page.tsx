'use client';
import { useState } from 'react';
import { Shell } from '@/components/shell';
import { QuizQuestion } from '@/components/quiz-question';

const questions = [{ question: '2 + 2 = ?', options: ['3', '4', '5', '6'] }];

export default function QuizPage() {
  const [picked, setPicked] = useState<number | null>(null);
  return <Shell><h1 className="text-2xl font-bold">Quiz Flow ⏱️</h1><p className="mt-2">Timer: 14:59</p><div className="mt-4"><QuizQuestion q={questions[0]} index={0} onPick={setPicked} /></div>{picked !== null && <div className="card-surya mt-4">Result preview: Answer submitted ✅</div>}</Shell>;
}
