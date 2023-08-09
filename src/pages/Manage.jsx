import React, { useState } from 'react';
import { ManageBox, ManageWrapper } from './pages.styles';
import { Controls } from '../components/controls';
import { Components } from '../components';
import { Grid } from '@mui/material';
import {
  manageCard,
  manageCardPayment,
} from '../constants/cardConst';

const Manage = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [activeComponent, setActiveComponent] = useState(0);

  const handleOpenCard = (id) => {
    setActiveComponent(id);
    setOpenDialog(true);
  };

  const AddEmployeeForm = (
    <Components.AddEmployeeForm setOpen={setOpenDialog} />
  );

  const EditEmployeeForm = <Components.EditEmployeeForm />;
  const RemoveEmployeeForm = <Components.RemoveEmployeeForm />;

  const popupForms = [
    AddEmployeeForm,
    EditEmployeeForm,
    RemoveEmployeeForm,
  ];

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
          <Grid
            item
            xs={2.5}
            key={item.id}
            onClick={() => handleOpenCard(item.id)}
          >
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
        title={
          activeComponent === 0
            ? 'Add an employee'
            : activeComponent === 1
            ? 'Edit employee details'
            : activeComponent === 2
            ? 'Remove an employee'
            : ''
        }
        open={openDialog}
        setOpen={setOpenDialog}
        maxWidth={'lg'}
      >
        {popupForms[activeComponent]}
      </Components.CustomDialog>
    </ManageWrapper>
  );
};

export default Manage;
