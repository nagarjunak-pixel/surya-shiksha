'use client';

type Q = { question: string; options: string[] };

export function QuizQuestion({ q, index, onPick }: { q: Q; index: number; onPick: (v: number) => void }) {
  return (
    <div className="card-surya">
      <p className="font-medium">Q{index + 1}. {q.question}</p>
      <div className="mt-3 space-y-2">
        {q.options.map((option, i) => (
          <button key={option} className="w-full rounded-lg border p-2 text-left hover:bg-orange-50" onClick={() => onPick(i)}>{option}</button>
        ))}
      </div>
    </div>
  );
}
