'use client';
import { Bar, BarChart, Line, LineChart, PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function ProgressCharts() {
  const radar = [
    { subject: 'Math', mastery: 80 }, { subject: 'Science', mastery: 74 }, { subject: 'English', mastery: 88 }
  ];
  const line = [
    { day: 'Mon', minutes: 30 }, { day: 'Tue', minutes: 42 }, { day: 'Wed', minutes: 35 }, { day: 'Thu', minutes: 55 }
  ];
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="card-surya h-72"><ResponsiveContainer width="100%" height="100%"><RadarChart data={radar}><PolarGrid /><PolarAngleAxis dataKey="subject" /><Radar name="Mastery" dataKey="mastery" fill="#f97316" fillOpacity={0.5} /><Tooltip /></RadarChart></ResponsiveContainer></div>
      <div className="card-surya h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={line}><XAxis dataKey="day" /><YAxis /><Tooltip /><Line type="monotone" dataKey="minutes" stroke="#f97316" /></LineChart></ResponsiveContainer></div>
      <div className="card-surya h-72 md:col-span-2"><ResponsiveContainer width="100%" height="100%"><BarChart data={radar}><XAxis dataKey="subject" /><YAxis /><Tooltip /><Bar dataKey="mastery" fill="#f59e0b" /></BarChart></ResponsiveContainer></div>
    </div>
  );
}
