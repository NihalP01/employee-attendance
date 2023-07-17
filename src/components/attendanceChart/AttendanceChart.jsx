import { Box, Grid } from '@mui/material';
import React from 'react';
import {
  ButtonBox,
  GridContainer,
  GridItem,
} from './attendanceChart.styles';
import { Controls } from '../controls';

const AttendanceChart = () => {
  const num = 31;
  return (
    <Box>
      <Controls.BaseTypography text="July, 2023" />
      <GridContainer container>
        {Array.from(Array(num), (_, index) => (
          <GridItem isPresent={true} key={index} item xs={1}>
            {index + 1}
          </GridItem>
        ))}
      </GridContainer>
      <Box display={'flex'} mt={1}>
        <Controls.BaseTypography text="Present days: 26" />
        <Controls.BaseTypography ml={4} text="Absent days: 4" />
        <Controls.BaseTypography ml={4} text="Total days worked: 4" />
      </Box>
      <ButtonBox>
        <Controls.BaseButton text="Print" />
        <Controls.BaseButton text="Close" />
      </ButtonBox>
    </Box>
  );
};

export default AttendanceChart;
