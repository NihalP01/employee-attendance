import React from 'react';
import {
  AttendanceWrapper,
  ButtonBox,
  EmployeeList,
  HeadingWrapper,
  SearchBox,
} from './pages.styles';
import { Controls } from '../components/controls';
import { Components } from '../components';
import { STATIC_ASSETS } from '../global/staticAssets';
import { Box } from '@mui/material';

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
      <Box mt={6} display={'flex'} justifyContent={'space-between'}>
        <SearchBox>
          <Controls.BaseTextField label="Search employee" />
          <STATIC_ASSETS.SEARCH_ICON
            sx={{ fontSize: '2rem', left: '-2rem', position: 'relative' }}
          />
        </SearchBox>
        <ButtonBox mr={'10rem'}>
          <Controls.BaseButton text="Submit" />
        </ButtonBox>
      </Box>
      <EmployeeList pl={2} mt={5}>
        {/* FIXME: */}
        <Components.CustomList />
        <Components.CustomList />
        <Components.CustomList />
      </EmployeeList>
    </AttendanceWrapper>
  );
};

export default Attendance;
