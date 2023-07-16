import React, { useState } from 'react';
import { Controls } from '../controls';
import { GridWrapper } from './list.styles';
import { Grid } from '@mui/material';
import { attendance } from '../../constants/selectConst';

const CustomList = () => {
  const [attendanceValue, setAttendanceValue] = useState('absent');

  const listcolor = () => {
    if (attendanceValue === 'absent') {
      return '#ffd8d8';
    } else if (attendanceValue === 'present') {
      return '#d8ffdd';
    }
  };

  return (
    <GridWrapper listcolor={listcolor()} mt={1} container spacing={2}>
      <Grid display={'flex'} alignItems={'center'} item xs={3.5}>
        <Controls.BaseTypography variant="subtitle2" text="Name Title" />
      </Grid>
      <Grid item xs={2}>
        <Controls.BaseSelect
          label="Present"
          options={attendance}
          value={attendanceValue}
          onChange={(e) => setAttendanceValue(e.target.value)}
        />
      </Grid>
      <Grid item xs={2}>
        <Controls.BaseTextField label="time" />
      </Grid>
      <Grid item xs={2}>
        <Controls.BaseButton text="Submit" />
      </Grid>
    </GridWrapper>
  );
};

export default CustomList;
