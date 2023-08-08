import React, { useEffect, useState } from 'react';
import { BoxWrapper } from './forms.styles';
import { Controls } from '../controls';
import { Box } from '@mui/material';
import { Components } from '..';

const EditEmployeeForm = () => {
  const [employeeList, setEmployeeList] = useState([]);

  useEffect(() => {
    setEmployeeList(
      JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS'))
    );
  }, []);

  return (
    <BoxWrapper>
      <Box>
        {employeeList.map((item) => (
          <Components.List key={item.employeeId} empDetails={item} />
        ))}
      </Box>
    </BoxWrapper>
  );
};

export default EditEmployeeForm;
