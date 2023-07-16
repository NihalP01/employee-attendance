import { Box, styled } from '@mui/material';

export const BoxWrapper = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'start',
  flexDirection: 'column',
  height: '100vh',
  boxShadow: '8px 0 5px -8px #888',
}));

export const UserBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

export const SideBarBox = styled(Box)(({ isactive }) => ({
  padding: '1rem',
  background: isactive === 'true' ? '#e2ffec' : '#f3f3f3',
  borderRadius: '0.5rem',
  margin: '0.2rem 1rem 0.2rem 1rem',
  cursor: 'pointer',
  '&:hover': {
    background: '#e8ebee',
  },
}));
