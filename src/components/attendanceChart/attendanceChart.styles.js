import { Box, Grid, styled } from '@mui/material';

export const GridContainer = styled(Grid)(() => ({
    margin: '0.5rem 0 0 0'
}));

export const GridItem = styled(Grid)(({ isPresent }) => ({
  border: '1px solid grey',
  padding: '0 1rem 0 1rem',
  backgroundColor: isPresent ? '#b6ffb6' : '#ffb6b6',
  display: 'flex',
  borderRadius: '0.4rem',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0.2rem',
}));

export const ButtonBox = styled(Box)(()=> ({
  maxWidth: '160px',
  marginTop: '2rem',
  marginBottom: '0.1rem',
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 'auto',
}))
