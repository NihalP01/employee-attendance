import React, { useState } from 'react';
import { Controls } from '../controls';
import { GridWrapper } from './list.styles';
import { Grid } from '@mui/material';
import { attendance } from '../../constants/selectConst';
import { Utils } from '../../utils/Utils';

const AttendanceList = (props) => {
  const {
    employeeId,
    employeeName,
    attendanceStatus,
    onAttendanceChange,
  } = props;

  const [attendanceValue, setAttendanceValue] =
    useState(attendanceStatus);

  const attendanceDate = Utils.formattedDate;

  const listcolor = () => {
    if (attendanceValue === 'absent') {
      return '#ffd8d8';
    } else if (attendanceValue === 'present') {
      return '#d8ffdd';
    }
  };

  const handleAttendanceChange = (value) => {
    setAttendanceValue(value);

    const attendanceData = {
      employeeId,
      employeeName,
      attendanceValue: value,
      attendanceDate,
    };
    onAttendanceChange(attendanceData);
  };

  return (
    <GridWrapper listcolor={listcolor()} mt={1} container spacing={2}>
      <Grid display={'flex'} alignItems={'center'} item xs={6}>
        <Controls.BaseTypography
          variant="subtitle2"
          text={employeeName}
        />
      </Grid>
      <Grid item xs={2}>
        <Controls.BaseSelect
          options={attendance}
          value={attendanceValue}
          onChange={(e) => handleAttendanceChange(e.target.value)}
        />
      </Grid>
    </GridWrapper>
  );
};

export default AttendanceList;
