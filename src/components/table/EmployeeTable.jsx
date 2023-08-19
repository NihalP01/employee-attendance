import React, { useEffect, useState } from 'react';
import { Box, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { StyledTableRow, TableBox } from './table.styles';
import { tableHeader } from '../../constants/tableConst';
import { Controls } from '../controls';
import { Components } from '..';
import AttendanceChart from '../attendanceChart/AttendanceChart';

const EmployeeTable = () => {
  const [open, setOpen] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  const [attendanceChart, setAttendanceChart] = useState([]);

  const handleClick = (id) => {
    setOpen(true);
  };

  useEffect(() => {
    setEmployeeList(JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS')));
    setAttendanceChart(JSON.parse(localStorage.getItem('ATTENDANCE_LIST')));
  }, []);

  const getAttendanceCount = (id, status) => {
    const attendance = attendanceChart.find((e) => e.id === id);
    const presentAbsentDays = attendance?.attendance?.filter(
      (a) => a.status === status
    ).length;
    if (attendance) {
      return presentAbsentDays;
    }
    return 0;
  };

  const getPayableAmount = (id) => {
    const attendance = attendanceChart.find((e) => e.id === id);
    const employee = employeeList.find((e) => e.employeeId === id);
    const presentAbsentDays = attendance?.attendance?.filter(
      (a) => a.status === 'present'
    ).length;
    if (attendance) {
      return `${presentAbsentDays * employee.employeeWage} ₹`;
    }
    return 0;
  };

  return (
    <Box mt={6}>
      <TableBox>
        <TableHead>
          <TableRow>
            {tableHeader.map((item) => (
              <TableCell key={item.id}>{item.value}</TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((item) => (
            <StyledTableRow key={item.employeeId}>
              <TableCell>{item.employeeName}</TableCell>
              <TableCell>
                {getAttendanceCount(item.employeeId, 'present')}
              </TableCell>
              <TableCell>
                {getAttendanceCount(item.employeeId, 'absent')}
              </TableCell>
              <TableCell>{getPayableAmount(item.employeeId)}</TableCell>
              <TableCell>
                <Controls.BaseButton
                  onClick={() => handleClick(item.id)}
                  text="View Details"
                />
              </TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </TableBox>

      <Components.CustomDialog
        open={open}
        title="Joe Smith, welder"
        setOpen={setOpen}
      >
        <AttendanceChart />
      </Components.CustomDialog>
    </Box>
  );
};

export default EmployeeTable;
