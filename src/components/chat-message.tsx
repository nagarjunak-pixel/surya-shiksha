export function ChatMessage({ role, content, typing }: { role: 'user' | 'assistant'; content: string; typing?: boolean }) {
  return (
    <div className={`max-w-[80%] rounded-2xl p-3 ${role === 'assistant' ? 'bg-orange-100' : 'ml-auto bg-slate-100'}`}>
      <p className="text-xs text-slate-500">{role === 'assistant' ? '🤖 SURYA' : '🧑 You'}</p>
      <p>{typing ? 'Typing...' : content}</p>
    </div>
  );
}
