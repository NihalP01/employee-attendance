import React, { useState } from 'react';
import { ManageBox, ManageWrapper } from './pages.styles';
import { Controls } from '../components/controls';
import { Components } from '../components';
import { Box, Grid } from '@mui/material';
import { manageCard, manageCardPayment } from '../constants/cardConst';

const Manage = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenCard = () => {
    setOpenDialog(true);
  };

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
          <Grid item xs={2.5} key={item.id} onClick={handleOpenCard}>
            <Components.ManageCards
              backgroundcolor={item.color}
              icon={item.icon}
              value={item.value}
            />
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
            <Components.ManageCards
              backgroundcolor={item.color}
              icon={item.icon}
              value={item.value}
            />
          </Grid>
        ))}
      </ManageBox>
      <Components.CustomDialog
        title="Add an employee"
        open={openDialog}
        setOpen={setOpenDialog}
      >
        <Components.AddEmployeeForm setOpen={setOpenDialog} />
      </Components.CustomDialog>
    </ManageWrapper>
  );
};

export default Manage;
