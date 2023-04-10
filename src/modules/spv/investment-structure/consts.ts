import { FieldsetValue } from '../../../types/projects/projects';

type ValueOf<T> = T[keyof T];

const sectionTitleInvestmentStructure = 'Investment Structure';

const FieldsetInvestStructureName = {
  desiredSpvName: 'desiredSpvName',
  initialMembers: 'initialMembers',
  manager: 'manager',
  specialMembers: 'specialMembers',
} as const;
type FieldsetInvestStructureName = ValueOf<typeof FieldsetInvestStructureName>;

const investStructureFieldset: Record<FieldsetInvestStructureName, FieldsetValue> = {
  [FieldsetInvestStructureName.desiredSpvName]: {
    title: 'Enter the desired name of your SPV',
    inputText: {
      value: FieldsetInvestStructureName.desiredSpvName,
      placeholder: 'SPV LLC',
    },
  },
  [FieldsetInvestStructureName.initialMembers]: {
    title: 'Initial Member(s)',
    subTitle: `The initial member(s) of the SPV will form the SPV and enter into the LLC Agreement
    with other members. The initial member(s) may cease to be a member at any time
    and may be a manager of the SPV or appoint a third-party manager. They may also
    be foreign individuals or legal entities.`,
    members: ['Harry Potter'],
  },
  [FieldsetInvestStructureName.manager]: {
    title: 'Manager',
    members: null,
  },
  [FieldsetInvestStructureName.specialMembers]: {
    title: 'Special Member(s)',
    members: null,
  },
};

export { FieldsetInvestStructureName, sectionTitleInvestmentStructure, investStructureFieldset };
