import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { employeeListTableHeader } from '../../constants/tableConst';

const EmployeeListTable = () => {
  const [employeesListTableRows, setEmployeesListTableRows] =
    useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS'));
    setEmployeesListTableRows(data);
  }, []);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {employeeListTableHeader.map((item) => (
            <TableCell key={item.id}>{item.value}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {employeesListTableRows?.map((item) => (
          <TableRow key={item.employeeId}>
            <TableCell>{item.employeeName}</TableCell>
            <TableCell>{item.employeeDesignation}</TableCell>
            <TableCell>{item.employeeAddress}</TableCell>
            <TableCell>{item.employeePhoneNumber}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmployeeListTable;
