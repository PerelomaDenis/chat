import { Avatar, Box, styled } from '@mui/material';

export const AvatarWrapper = styled(Box)(({ theme }) => ({
  border: '3px solid #7164FF',
  borderRadius: '50%',
  borderTop: '3px solid transparent',
  transform: 'rotate(45deg)',
  padding: theme.spacing(0.5),
  position: 'relative',
}));

export const AvatarItem = styled(Avatar)(({ theme }) => ({
  transform: 'rotate(-45deg)',
  width: theme.spacing(10.5),
  height: theme.spacing(10.5),
}));

export const AvatarAction = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(270deg, #7164FF 0%, #682DFE 100%)',
  border: '1px solid #282F39',
  borderRadius: '50%',
  width: theme.spacing(3),
  height: theme.spacing(3),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  position: 'absolute',
  top: '-5px',
  right: '30px',
}));
