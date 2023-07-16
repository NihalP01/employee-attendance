import React from 'react';
import { Components } from '../components';
import { GridWrapper } from './layout.styles';
import { Grid } from '@mui/material';

const Layout = (props) => {
  const { children } = props;
  return (
    <GridWrapper container>
      <Grid item lg={2}>
        <Components.Sidebar />
      </Grid>
      <Grid item p={3} lg={10}>
        {children}
      </Grid>
    </GridWrapper>
  );
};

export default Layout;
