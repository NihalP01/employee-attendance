import React from 'react';
import { Controls } from '../controls';
import { GridWrapper } from './list.styles';
import { Grid } from '@mui/material';
import { attendance } from '../../constants/selectConst';

const AttendanceList = (props) => {
  const { employeeId, employeeName, attendanceStatus, onAttendanceChange } =
    props;

  const listcolor = () => {
    if (attendanceStatus === 'absent') {
      return '#ffd8d8';
    } else if (attendanceStatus === 'present') {
      return '#d8ffdd';
    }
  };

  return (
    <GridWrapper listcolor={listcolor()} mt={1} container spacing={2}>
      <Grid display={'flex'} alignItems={'center'} item xs={6}>
        <Controls.BaseTypography variant="subtitle2" text={employeeName} />
      </Grid>
      <Grid item xs={2}>
        <Controls.BaseSelect
          options={attendance}
          defaultValue="absent"
          value={attendanceStatus}
          onChange={(e) =>
            onAttendanceChange(employeeId, employeeName, e.target.value)
          }
        />
      </Grid>
    </GridWrapper>
  );
};

export default AttendanceList;
