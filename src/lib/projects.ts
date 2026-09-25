export interface Repo {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  pushed_at: string | null;
  fork: boolean;
  archived?: boolean;
  disabled?: boolean;
}

export interface Project {
  repo: Repo;
  tech: string[];
  pushedAt: number;
}

const SOURCES = ['users/rcasia', 'orgs/ascii-ui'];
const EXCLUDE = new Set(['rcasia/rcasia.github.io']);
const THREE_MONTHS_MS = 90 * 24 * 60 * 60 * 1000;

const headers: Record<string, string> = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'rcasia.github.io',
};
const token = import.meta.env.GITHUB_TOKEN as string | undefined;
if (token) headers.Authorization = `Bearer ${token}`;

async function listRepos(source: string): Promise<Repo[]> {
  try {
    const res = await fetch(`https://api.github.com/${source}/repos?per_page=100`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) {
      console.warn(`projects: GitHub API ${res.status} for ${source}, skipping`);
      return [];
    }
    return (await res.json()) as Repo[];
  } catch (err) {
    console.warn(`projects: failed to fetch ${source}, skipping`, err);
    return [];
  }
}

function techFor(repo: Repo): string[] {
  const tags: string[] = [];
  if (repo.language) tags.push(repo.language);
  for (const topic of repo.topics ?? []) {
    if (!tags.some((tag) => tag.toLowerCase() === topic.toLowerCase())) tags.push(topic);
  }
  return tags;
}

export async function getProjects(): Promise<Project[]> {
  const now = Date.now();
  const repos = await Promise.all(SOURCES.map(listRepos)).then((lists) => lists.flat());

  return repos
    .filter((repo) => !repo.fork && !repo.archived && !repo.disabled && !EXCLUDE.has(repo.full_name))
    .filter((repo) => {
      const pushedAt = repo.pushed_at ? new Date(repo.pushed_at).getTime() : null;
      return (
        (repo.stargazers_count ?? 0) > 4 || (pushedAt !== null && now - pushedAt < THREE_MONTHS_MS)
      );
    })
    .map((repo) => ({
      repo,
      tech: techFor(repo),
      pushedAt: repo.pushed_at ? new Date(repo.pushed_at).getTime() : 0,
    }))
    .sort((a, b) => b.repo.stargazers_count - a.repo.stargazers_count || b.pushedAt - a.pushedAt);
}
