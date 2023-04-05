import { ProjectItem } from './types';

type ValueOf<T> = T[keyof T];

const ProjectName = {
  spv: 'SPV',
  seriesLls: 'Serires LLC',
  seriesAsService: ' Series as a Service',
  limitedPartnership: 'Limited Partnership',
  startup: 'Startup',
} as const;
type ProjectName = ValueOf<typeof ProjectName>;

const projectList: ProjectItem[] = [
  {
    title: ProjectName.spv,
    description: `A distinct company with its own assets, liabilities, and legal status.
    On our platform, you can form a single asset or multi-asset SPV.`,
  },
  {
    title: ProjectName.seriesLls,
    description: `A series LLC is an entity structure that allows for the formation of multiple segregated LLCs
      (or "series") under the umbrella of a single "master" LLC. Series LLC provides separate corporate
      liability protection of each series. Forming a Series LLC is a great way to keep your investments divided up.`,
  },
  {
    title: ProjectName.seriesAsService,
    description: `You can invest in a series that will be created by Deal Answer for your investment deal.
    You or your company receives all carried interest and management fees reduced by Deal Answer's fees.`,
  },
  {
    title: ProjectName.limitedPartnership,
    description: `Limited Partnership is the most common form of ownership structure for private equity funds.
      Our custom-designed limited partnership are structured in compliance with ILPA standards.`,
  },
  {
    title: ProjectName.startup,
    description: `A series LLC is an entity structure that allows for the formation of multiple segregated
    LLCs (or "series") under the umbrella of a single "master" LLC.
    Series LLC provides separate corporate liability protection of each series.
    Forming a Series LLC is a great way to keep your investments divided up.`,
  },
];

export { projectList, ProjectName };
