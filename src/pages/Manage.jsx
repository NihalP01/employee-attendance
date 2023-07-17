import React from 'react';
import { ManageBox, ManageWrapper } from './pages.styles';
import { Controls } from '../components/controls';
import { Components } from '../components';
import { Grid } from '@mui/material';
import { manageCard } from '../constants/cardConst';

const Manage = () => {
  return (
    <ManageWrapper>
      <Controls.BaseTypography
        mt={2}
        variant="subtitle1"
        text="Add, update or remove employee"
      />
      <ManageBox container spacing={2}>
        {manageCard.map((item) => (
          <Grid item xs={2.5} key={item.id}>
            <Components.ManageCards icon={item.icon} value={item.value} />
          </Grid>
        ))}
        
      </ManageBox>
    </ManageWrapper>
  );
};

export default Manage;
