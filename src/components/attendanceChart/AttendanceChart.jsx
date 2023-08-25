import { Box, Divider, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ButtonBox, GridContainer, GridItem } from './attendanceChart.styles';
import { Controls } from '../controls';
import { STATIC_ASSETS } from '../../global/staticAssets';

const AttendanceChart = (props) => {
  const { presentDays, employeeDetails, absentDays } = props;
  const [attendanceList, setAttendanceList] = useState([]);

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    setAttendanceList(JSON.parse(localStorage.getItem('ATTENDANCE_LIST')));
  }, []);

  console.log(attendanceList)

  const attendance = attendanceList.find(
    (item) => item.id === employeeDetails.employeeId
  );
  const attendanceChart = attendance?.attendance;

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={700}
      >
        <Controls.BaseTypography text="July, 2023" />
        <Box display={'flex'}>
          <IconButton color="primary">
            <STATIC_ASSETS.ARROW_PREV />
          </IconButton>
          <IconButton color="primary">
            <STATIC_ASSETS.ARROW_NEXT />
          </IconButton>
        </Box>
      </Box>
      <GridContainer container>
        {/* {Array.from(Array(num), (_, index) => (
          <GridItem isPresent={true} key={index} item xs={1}>
            {index + 1}
          </GridItem>
        ))} */}
        {attendanceChart?.map((item, index) => (
          <GridItem
            ispresent={item.status === 'present' ? 'true' : 'false'}
            key={index}
            item
            xs={1}
          >
            {index + 1}
          </GridItem>
        ))}
      </GridContainer>
      <Box display={'flex'} mt={1}>
        <Controls.BaseTypography text={`Present days: ${presentDays}`} />
        <Controls.BaseTypography ml={4} text={`Absent days: ${absentDays}`} />
        {/* <Controls.BaseTypography ml={4} text="Total days worked: 4" /> */}
      </Box>
      <Divider sx={{ mt: '3rem' }} />
      <ButtonBox>
        <Controls.BaseButton onClick={handlePrint} text="Print" />
      </ButtonBox>
    </Box>
  );
};

export default AttendanceChart;
