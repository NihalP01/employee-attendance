import React, { useEffect, useState } from 'react';
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
  const [employeeData, setEmployeeData] = useState([]);
  const savedAttendanceList = JSON.parse(
    localStorage.getItem('ATTENDANCE_LIST')
  );
  const [attendanceList, setAttendanceList] = useState(savedAttendanceList);

  
  

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS'));
    setEmployeeData(data);
  }, []);

  function attendanceCount() {
    let absentCount = 0;
    for (const attendance of attendanceList) {
      if (attendance.attendanceValue === 'present') {
        absentCount++;
      }
    }
    return absentCount;
  }

  function getAttendanceStatus(employeeId) {
    const attendanceData = attendanceList.find(
      (attendance) => attendance.employeeId === employeeId
    );

    return attendanceData ? attendanceData.attendanceValue : 'absent';
  }

  const handleAttendanceChange = (attendanceData) => {
    const filteredList = attendanceList.filter(
      (item) => item.employeeId !== attendanceData.employeeId
    );
    setAttendanceList([...filteredList, attendanceData]);
  };

  const handleSubmitAttendance = () => {
    localStorage.setItem(
      'ATTENDANCE_LIST',
      JSON.stringify(attendanceList)
    );
  };

  return (
    <AttendanceWrapper>
      <HeadingWrapper>
        <Controls.BaseTypography
          mt={2}
          variant="subtitle1"
          text={`Total Employees: ${employeeData?.length}`}
        />
        <Controls.BaseTypography
          mt={2}
          variant="subtitle1"
          text={`Present: ${attendanceCount()}`}
        />
      </HeadingWrapper>
      <Box mt={6} display={'flex'} justifyContent={'space-between'}>
        <SearchBox>
          <Controls.BaseTextField label="Search employee" />
          <STATIC_ASSETS.SEARCH_ICON
            sx={{
              fontSize: '2rem',
              left: '-2rem',
              position: 'relative',
            }}
          />
        </SearchBox>
        <ButtonBox mr={'10rem'}>
          <Controls.BaseButton
            text="Submit"
            onClick={handleSubmitAttendance}
          />
        </ButtonBox>
      </Box>
      <EmployeeList pl={2} mt={5}>
        {/* FIXME: */}
        {employeeData?.map((item) => (
          <Components.CustomList
            key={item.employeeId}
            employeeId={item.employeeId}
            employeeName={item.employeeName}
            attendanceStatus={getAttendanceStatus(item.employeeId)}
            onAttendanceChange={handleAttendanceChange}
          />
        ))}
      </EmployeeList>
    </AttendanceWrapper>
  );
};

export default Attendance;
