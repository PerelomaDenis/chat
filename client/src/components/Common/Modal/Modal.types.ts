import { ReactNode } from 'react';

export interface ModalProps {
  image: ReactNode;
  subText: string;
  text: string;
  open: boolean;
  onClose: () => void;
}
