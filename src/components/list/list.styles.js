import { Box, Grid, styled } from '@mui/material';

export const GridWrapper = styled(Grid)(({ listcolor }) => ({
  background: listcolor,
  borderRadius: '0.5rem',
  paddingBottom: '0.8rem',
  paddingLeft: '0.5rem',
}));

export const BoxWrapper = styled(Box)(() => ({}));

export const CustomList = styled(Box)(() => ({}));

export const TextBox = styled(Box)(() => ({
  
}));
