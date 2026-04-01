'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Shell({ children, role = 'STUDENT' }: { children: React.ReactNode; role?: string }) {
  const pathname = usePathname();
  const common = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/curriculum', label: 'Curriculum' },
    { href: '/learn', label: 'Learn' },
    { href: '/assessment', label: 'Assessment' },
    { href: '/progress', label: 'Progress' },
    { href: '/settings', label: 'Settings' }
  ];
  const roleLinks: Record<string, { href: string; label: string }[]> = {
    PARENT: [{ href: '/dashboard/parent', label: 'Parent Panel' }],
    TEACHER: [{ href: '/dashboard/teacher', label: 'Teacher Panel' }],
    ADMIN: [{ href: '/dashboard/admin', label: 'Admin Panel' }],
    STUDENT: []
  };
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-slate-900 p-4 text-white">
        <div className="mb-6 text-xl font-bold text-orange-400">☀️ SURYA</div>
        <nav className="space-y-1">
          {[...common, ...(roleLinks[role] ?? [])].map((item) => (
            <Link key={item.href} href={item.href} className={cn('block rounded-lg px-3 py-2 hover:bg-slate-800', pathname === item.href && 'bg-slate-800 text-orange-300')}>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
