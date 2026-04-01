import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-400 via-orange-300 to-amber-300 p-6 text-slate-900">
      <div className="pointer-events-none absolute inset-0 sun-glow" />
      <div className="absolute left-10 top-20 animate-float text-3xl">📘</div>
      <div className="absolute right-12 top-40 animate-float text-3xl">🧠</div>
      <div className="absolute bottom-20 left-1/3 animate-float text-3xl">✨</div>
      <section className="mx-auto max-w-5xl text-center">
        <div className="animate-pulseSun text-7xl">☀️</div>
        <h1 className="mt-5 text-5xl font-black">SURYA SHIKSHA</h1>
        <p className="mt-3 text-xl">Where Every Child Shines ☀️</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/login" className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white">Start Learning</Link>
          <Link href="/dashboard/parent" className="rounded-xl border border-slate-900 bg-white/70 px-5 py-3 font-semibold">Parent Login</Link>
        </div>
      </section>
      <section className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
        {['Curriculum Factory', 'AI Personal Tutor', 'Mastery System'].map((title) => (
          <div key={title} className="card-surya bg-white/90"><h3 className="font-bold">{title}</h3><p className="mt-2 text-sm">Powerful AI workflows to personalize every learner&apos;s journey.</p></div>
        ))}
      </section>
      <section className="mx-auto mt-8 max-w-3xl card-surya bg-white/90 text-center">
        <h3 className="font-semibold">Mastery Ladder</h3>
        <p className="mt-2">Understand → Solve → Apply → Analyze → Create</p>
      </section>
    </main>
  );
}
