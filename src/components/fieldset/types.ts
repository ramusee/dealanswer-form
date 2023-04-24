import { ReactNode } from 'react';

interface FieldsetProps {
  title: string;
  subTitle?: string;
  children: ReactNode;
  infoText?: string;
}

export type { FieldsetProps };
