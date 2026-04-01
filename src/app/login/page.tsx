'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('arjun@surya.ai');
  const [password, setPassword] = useState('demo123');
  const [role, setRole] = useState('STUDENT');
  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-bold">Login to SURYA SHIKSHA</h1>
      <form className="card-surya mt-5 space-y-3" onSubmit={(e) => { e.preventDefault(); signIn('credentials', { email, password, callbackUrl: '/dashboard' }); }}>
        <input className="w-full rounded border p-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="w-full rounded border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <select className="w-full rounded border p-2" value={role} onChange={(e) => setRole(e.target.value)}>
          <option>STUDENT</option><option>PARENT</option><option>TEACHER</option><option>ADMIN</option>
        </select>
        <button className="w-full rounded bg-surya-500 p-2 text-white">Sign In</button>
      </form>
      <p className="mt-4 text-sm">Demo creds: arjun@surya.ai / demo123</p>
    </main>
  );
}
