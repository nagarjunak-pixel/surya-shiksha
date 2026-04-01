import { ChatMessage } from '@/components/chat-message';
import { Shell } from '@/components/shell';

export default function LearnPage() {
  return <Shell><h1 className="text-2xl font-bold">AI Tutor Chat</h1><div className="mt-4 space-y-3"><ChatMessage role="assistant" content="Hi Arjun! Ready to learn fractions with pizza slices? 🍕" /><ChatMessage role="user" content="Yes!" /><ChatMessage role="assistant" content="Great! If we split a pizza into 8 slices and eat 2, what fraction is left?" /></div></Shell>;
}
