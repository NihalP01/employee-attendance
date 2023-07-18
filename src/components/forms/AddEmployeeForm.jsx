import React, { useState } from 'react';
import { BoxWrapper } from './addEmployee.styles';
import { Box, Divider, FormControl, Grid } from '@mui/material';
import { Controls } from '../controls/index';
import { ButtonBox } from '../attendanceChart/attendanceChart.styles';

const AddEmployeeForm = ({ setOpen }) => {
  const initialFormData = {
    employeeName: '',
    employeeDesignation: '',
    employeeWage: '',
    employeePhoneNumber: '',
    employeeAddress: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({});

  const handleFormChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [field]: '',
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validateForm = () => {
    let errors = {};

    // Perform validation logic for each field
    if (formData.employeeName.trim() === '') {
      errors.employeeName = 'Employee name is required';
    }

    // ... Perform validation for other fields ...

    setFormErrors(errors);

    // Return true if there are no errors, otherwise return false
    return Object.keys(errors).length === 0;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log(formData);
      setOpen(false);
    }
  };

  return (
    <BoxWrapper>
      <Grid mb={4} container spacing={2}>
        <Grid item xs={6}>
          <Controls.BaseTextField
            label="Employee name"
            type="text"
            value={formData.employeeName}
            onChange={(e) => handleFormChange('employeeName', e.target.value)}
            error={Boolean(formErrors.employeeName)}
            helperText={formErrors.employeeName}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.BaseTextField
            label="Employee Designation"
            type="text"
            onChange={(e) =>
              handleFormChange('employeeDesignation', e.target.value)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.BaseTextField
            label="Employee Wage per day"
            type="number"
            onChange={(e) => handleFormChange('employeeWage', e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.BaseTextField
            label="Employee Phone number"
            type="number"
            onChange={(e) =>
              handleFormChange('employeePhoneNumber', e.target.value)
            }
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.BaseTextField
            label="Employee address"
            type="text"
            onChange={(e) =>
              handleFormChange('employeeAddress', e.target.value)
            }
          />
        </Grid>
      </Grid>
      <Divider />
      <ButtonBox>
        <Controls.BaseButton onClick={handleSubmitForm} text="Save" />
        <Controls.BaseButton text="Cancel" onClick={handleClose} />
      </ButtonBox>
    </BoxWrapper>
  );
};

export default AddEmployeeForm;
