import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import {
  employeeListTableHeader,
  employeesListTableRows,
} from '../../constants/tableConst';

const EmployeeListTable = () => {
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
        {employeesListTableRows.map((item) => (
          <TableRow key={item.id}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.designation}</TableCell>
            <TableCell>{item.address}</TableCell>
            <TableCell>{item.phoneNumber}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default EmployeeListTable;
