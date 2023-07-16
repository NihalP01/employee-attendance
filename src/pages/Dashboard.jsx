import React from 'react';
import { DashboardWrapper } from './pages.styles';
import { Controls } from '../components/controls';
import { Components } from '../components';

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Controls.BaseTypography
        mt={2}
        variant="subtitle1"
        text="Hi, Welcome Back"
      />
      <Components.EmployeeTable />
    </DashboardWrapper>
  );
};

export default Dashboard;
