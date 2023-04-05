import { ProjectName } from './consts';

interface ProjectItem {
  title: ProjectName;
  description: string;
}

interface ProjectItemProps {
  title: string;
  description: string;
}

export type { ProjectItemProps, ProjectItem };
