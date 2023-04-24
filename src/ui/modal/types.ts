import { ReactNode } from 'react';

interface ModalProps {
  isActive: boolean;
  setIsActive: (arg: boolean) => void;
  children: ReactNode;
}

export type { ModalProps };
