import { Box, styled } from '@mui/material';

export const CardWrapper = styled(Box)(({ backgroundcolor }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: backgroundcolor ? backgroundcolor : '',
  justifyContent: 'center',
  padding: '2rem',
  cursor: 'pointer',
  border: '1px solid rgba(229, 231, 235)',
  borderRadius: '1.5rem',
  transition: 'box-shadow 0.15s Fast Out, Slow In',
  '&:hover': {
    boxShadow: '0px 10px 10px -3px rgba(0, 0, 0, 0.15)',
  },
}));
