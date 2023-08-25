import React, { useState } from 'react';
import { BoxWrapper, ButtonBox } from './forms.styles';
import { Divider, Grid } from '@mui/material';
import { Controls } from '../controls/index';


const AddEmployeeForm = ({ setOpen }) => {
  const uniqueID = new Date().getTime();

  const initialFormData = {
    employeeId: uniqueID,
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

    if (formData.employeeName.trim() === '') {
      errors.employeeName = 'Employee name is required';
    }
    if (formData.employeeDesignation.trim() === '') {
      errors.employeeDesignation = 'Employee designation is required';
    }

    if (formData.employeeWage.trim() === '') {
      errors.employeeWage = 'Employee wage is required';
    }

    if (formData.employeeAddress.trim() === '') {
      errors.employeeAddress = 'Employee address is required';
    }

    if (formData.employeePhoneNumber.trim() === '') {
      errors.employeePhoneNumber = 'Employee phone number is required';
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const existedData =
        JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS')) || [];
      const updatedData = [...existedData, formData];

      localStorage.setItem('EMPLOYEE_DETAILS', JSON.stringify(updatedData));
      setOpen(false);
    }
  };

  return (
    <BoxWrapper>
      <Grid mb={4} container spacing={2}>
        <Grid item xs={6}>
          <Controls.BaseTypography variant="body3" text="Name" />
          <Controls.BaseTextField
            placeholder="Joe Smith"
            type="text"
            sx={{ marginTop: 0.6 }}
            value={formData.employeeName}
            onChange={(e) => handleFormChange('employeeName', e.target.value)}
            error={Boolean(formErrors.employeeName)}
            helperText={formErrors.employeeName}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.BaseTypography variant="body3" text="Designation" />
          <Controls.BaseTextField
            placeholder="Welder"
            type="text"
            sx={{ marginTop: 0.6 }}
            onChange={(e) =>
              handleFormChange('employeeDesignation', e.target.value)
            }
            error={Boolean(formErrors.employeeDesignation)}
            helperText={formErrors.employeeDesignation}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.BaseTypography variant="body3" text="Wage per day" />
          <Controls.BaseTextField
            type="number"
            placeholder="800"
            sx={{ marginTop: 0.6 }}
            onChange={(e) => handleFormChange('employeeWage', e.target.value)}
            error={Boolean(formErrors.employeeWage)}
            helperText={formErrors.employeeWage}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.BaseTypography variant="body3" text="Phone Number" />
          <Controls.BaseTextField
            type="number"
            placeholder="7002020202"
            sx={{ marginTop: 0.6 }}
            onChange={(e) =>
              handleFormChange('employeePhoneNumber', e.target.value)
            }
            error={Boolean(formErrors.employeePhoneNumber)}
            helperText={formErrors.employeePhoneNumber}
          />
        </Grid>
        <Grid item xs={12}>
          <Controls.BaseTypography variant="body3" text="Employee Address" />
          <Controls.BaseTextField
            type="text"
            placeholder="Panibil Jamunamukh, Sibsagar, Assam"
            sx={{ marginTop: 0.6 }}
            onChange={(e) =>
              handleFormChange('employeeAddress', e.target.value)
            }
            multiline
            rows={4}
            error={Boolean(formErrors.employeeAddress)}
            helperText={formErrors.employeeAddress}
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
