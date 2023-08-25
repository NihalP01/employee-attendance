import { Box, styled } from '@mui/material';

export const BoxWrapper = styled(Box)(() => ({}));

export const EditEmployeeFormBoxWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const ButtonBox = styled(Box)(() => ({
  maxWidth: '170px',
  marginTop: '0.7rem',
  marginBottom: '0.1rem',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'auto',
}));