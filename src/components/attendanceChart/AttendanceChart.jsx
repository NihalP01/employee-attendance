import { Box, Divider, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { ButtonBox, GridContainer, GridItem } from './attendanceChart.styles';
import { Controls } from '../controls';
import { STATIC_ASSETS } from '../../global/staticAssets';

const AttendanceChart = () => {
  const [attendanceChart, setAttendanceChart] = useState([]);

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    setAttendanceChart(JSON.parse(localStorage.getItem('ATTENDANCE_LIST')));
  }, []);

  console.log(attendanceChart);

  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
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
        {attendanceChart.map((item, index) => (
          <GridItem isPresent={true} key={item.employeeId} item xs={1}>
            {index + 1}
          </GridItem>
        ))}
      </GridContainer>
      <Box display={'flex'} mt={1}>
        <Controls.BaseTypography text="Present days: 26" />
        <Controls.BaseTypography ml={4} text="Absent days: 4" />
        <Controls.BaseTypography ml={4} text="Total days worked: 4" />
      </Box>
      <Divider sx={{ mt: '3rem' }} />
      <ButtonBox>
        <Controls.BaseButton onClick={handlePrint} text="Print" />
        <Controls.BaseButton text="Close" />
      </ButtonBox>
    </Box>
  );
};

export default AttendanceChart;
