import React, { useEffect, useState } from 'react';
import { BoxWrapper } from './forms.styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Controls } from '../controls';
import { editEmployeeTableHeader } from '../../constants/tableConst';

const RemoveEmployeeForm = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [attendanceList, setAttendanceList] = useState([]);

  useEffect(() => {
    setEmployeeList(JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS')));
    setAttendanceList(JSON.parse(localStorage.getItem('ATTENDANCE_LIST')));
  }, []);

  const handleRemoveEmployee = (id) => {
    const updatedEmployeeList = employeeList.filter(
      (item) => item.employeeId !== id
    );

    setEmployeeList(updatedEmployeeList);
    localStorage.setItem(
      'EMPLOYEE_DETAILS',
      JSON.stringify(updatedEmployeeList)
    );

    const updatedAttendanceList = attendanceList.filter(
      (item) => item.employeeId !== id
    );

    setAttendanceList(updatedAttendanceList);
    localStorage.setItem(
      'ATTENDANCE_LIST',
      JSON.stringify(updatedAttendanceList)
    );
  };

  return (
    <BoxWrapper>
      {employeeList?.length === 0 ? (
        <Controls.BaseTypography mt={4} text="No data available" />
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              {editEmployeeTableHeader?.map((item) => (
                <TableCell key={item.id}>{item.value}</TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {employeeList?.map((item) => (
              <TableRow key={item.employeeId}>
                <TableCell>{item.employeeName}</TableCell>
                <TableCell>{item.employeeDesignation}</TableCell>
                <TableCell>{item.employeeWage}</TableCell>
                <TableCell>{item.employeeAddress}</TableCell>
                <TableCell>{item.employeePhoneNumber}</TableCell>
                <TableCell>
                  <Controls.BaseButton
                    text="Remove"
                    onClick={() => handleRemoveEmployee(item.employeeId)}
                    color="error"
                    sx={{ height: 30 }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </BoxWrapper>
  );
};

export default RemoveEmployeeForm;
