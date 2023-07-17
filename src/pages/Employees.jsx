import React from 'react';
import { EmployeeTableList, EmployeeWrapper } from './pages.styles';
import { Controls } from '../components/controls';
import { Components } from '../components';

const Employees = () => {
  return (
    <EmployeeWrapper>
      <Controls.BaseTypography
        mt={2}
        variant="subtitle1"
        text="List of employees"
      />
      <EmployeeTableList>
        <Components.EmployeeListTable />
      </EmployeeTableList>
    </EmployeeWrapper>
  );
};

export default Employees;
