import React from 'react';
import { AttendanceWrapper, EmployeeList, HeadingWrapper, SearchBox } from './pages.styles';
import { Controls } from '../components/controls';
import { Components } from '../components';
import { STATIC_ASSETS } from '../global/staticAssets';

const Attendance = () => {
  return (
    <AttendanceWrapper>
      <HeadingWrapper>
        <Controls.BaseTypography
          mt={2}
          variant="subtitle1"
          text="Total Employees: 20"
        />
        <Controls.BaseTypography
          mt={2}
          variant="subtitle1"
          text="Present: 10"
        />
      </HeadingWrapper>
      <SearchBox mt={6}>
        <Controls.BaseTextField label="Search employee" />
        <STATIC_ASSETS.SEARCH_ICON sx={{fontSize: '2rem', left: '-2rem', position: 'relative'}}/>
      </SearchBox>
      <EmployeeList pl={2} mt={5}>
      {/* FIXME: */}
        <Components.CustomList/>
        <Components.CustomList/>
        <Components.CustomList/>
      </EmployeeList>
    </AttendanceWrapper>
  );
};

export default Attendance;
