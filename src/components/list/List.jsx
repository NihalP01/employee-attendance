import React, { useState } from 'react';
import { Controls } from '../controls';
import { BoxWrapper, CustomList, TextBox } from './list.styles';
import { Box } from '@mui/material';

const List = ({ empDetails }) => {
  const [editing, setEditing] = useState(false);
  const [empName, setEmpName] = useState(empDetails.employeeName);
  const [empDesignation, setEmpDesignation] = useState(
    empDetails.employeeDesignation
  );
  const [employeeAddress, setEmployeeAddress] = useState(
    empDetails.employeeAddress
  );
  const [employeePhoneNumber, setEmployeePhoneNumber] = useState(
    empDetails.employeePhoneNumber
  );
  const [employeeWage, setEmployeeWage] = useState(
    empDetails.employeeWage
  );

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleChange = (event) => {
    setEmpName(event.target.value);
  };

  return (
    <BoxWrapper>
      <CustomList>
        {editing ? (
          <Box display={'flex'}>
            <Controls.BaseTextField
              value={empName}
              placeholder="Name"
              onChange={handleChange}
            />
            <Controls.BaseTextField
              value={empDesignation}
              placeholder="Designation"
              onChange={handleChange}
            />
          </Box>
        ) : (
          <TextBox
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box
              width={'100%'}
              display={'flex'}
              justifyContent={'space-between'}
              py={2}
            >
              <Controls.BaseTypography
                text={empName}
                variant="body1"
              />
              <Controls.BaseTypography
                text={empDesignation}
                variant="body1"
              />
              <Controls.BaseTypography
                text={empName}
                variant="body1"
              />
              <Controls.BaseTypography
                text={empDesignation}
                variant="body1"
              />
            </Box>
            <Controls.BaseButton
              sx={{ height: 28, marginLeft: 2 }}
              btnsize={20}
              onClick={handleEdit}
              text="Edit"
            />
          </TextBox>
        )}
        {editing && (
          <Controls.BaseButton onClick={handleSave} text="Save" />
        )}
      </CustomList>
    </BoxWrapper>
  );
};

export default List;
