export interface DeploymentMetadata {
  commit: string | null;
  shortCommit: string | null;
  buildTime: string | null;
  version: string;
  environment: string;
}

const commit = import.meta.env.DEPLOYMENT_COMMIT?.trim() || null;
const buildTime = import.meta.env.DEPLOYMENT_BUILD_TIME?.trim() || null;
const environment = import.meta.env.DEPLOYMENT_ENVIRONMENT?.trim() || 'local';
const shortCommit = commit?.slice(0, 7) ?? null;
const buildDate = buildTime?.slice(0, 10).replaceAll('-', '.') ?? null;

export const DEPLOYMENT: DeploymentMetadata = {
  commit,
  shortCommit,
  buildTime,
  version: commit && buildDate ? `${buildDate}-${shortCommit}` : 'local',
  environment,
};
