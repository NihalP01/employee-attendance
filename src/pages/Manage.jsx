import React from 'react';
import { ManageBox, ManageWrapper } from './pages.styles';
import { Controls } from '../components/controls';
import { Components } from '../components';
import { Grid } from '@mui/material';
import { manageCard, manageCardPayment } from '../constants/cardConst';

const Manage = () => {
  return (
    <ManageWrapper>
      <Controls.BaseTypography
        mt={2}
        variant="subtitle1"
        text="Employee management"
      />
      <Controls.BaseTypography
        mt={4}
        variant="subtitle2"
        text="Add, update details or remove an employee"
      />
      <ManageBox container spacing={2}>
        {manageCard.map((item) => (
          <Grid item xs={2.5} key={item.id}>
            <Components.ManageCards backgroundcolor={item.color} icon={item.icon} value={item.value} />
          </Grid>
        ))}
      </ManageBox>

      <Controls.BaseTypography
        mt={4}
        variant="subtitle2"
        text="Update payment"
      />
      <ManageBox container spacing={2}>
        {manageCardPayment.map((item) => (
          <Grid item xs={2.5} key={item.id}>
            <Components.ManageCards backgroundcolor={item.color} icon={item.icon} value={item.value} />
          </Grid>
        ))}
      </ManageBox>
    </ManageWrapper>
  );
};

export default Manage;
