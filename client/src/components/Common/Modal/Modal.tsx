import React from 'react';

import { Dialog, DialogContent, DialogTitle } from '@mui/material';

import { ModalProps } from './Modal.types';
import { Close } from '@mui/icons-material';
import * as S from './Modal.styles';

export const Modal: React.FC<ModalProps> = ({ subText, text, image, open, onClose }) => {
  return (
    <Dialog onClose={onClose} open={open}>
      <DialogTitle>
        <Close onClick={onClose} />
      </DialogTitle>
      <DialogContent>
        {image}
        <S.ModalText>{text}</S.ModalText>
        <S.ModalSubtext>{subText}</S.ModalSubtext>
      </DialogContent>
    </Dialog>
  );
};
