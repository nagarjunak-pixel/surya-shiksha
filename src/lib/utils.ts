import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
export const formatDate = (date: string | Date) => new Date(date).toLocaleDateString();
export const calculateMastery = (score: number) => {
  if (score < 35) return 'UNDERSTAND';
  if (score < 55) return 'SOLVE';
  if (score < 70) return 'APPLY';
  if (score < 85) return 'ANALYZE';
  return 'CREATE';
};
