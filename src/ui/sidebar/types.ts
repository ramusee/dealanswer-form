import { ReactNode } from 'react';

interface SidebarProps {
  title: string;
  subtitle?: string;
  active: boolean;
  setActive: () => void;
  children: ReactNode;
}

export type { SidebarProps };
