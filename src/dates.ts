export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

export function getReadTime(body?: string): number {
  const words = body ? body.trim().split(/\s+/).filter(Boolean).length : 120;
  return Math.max(1, Math.round(words / 180));
}
