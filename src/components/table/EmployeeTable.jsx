import React from 'react';
import {
  Box,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { StyledTableRow, TableBox } from './table.styles';
import { tableHeader, tableRows } from '../../constants/tableConst';

const EmployeeTable = () => {
  return (
    <Box mt={6}>
      <TableBox>
        <TableHead>
          <TableRow>
            {tableHeader.map((item) => (
              <TableCell key={item.id}>{item.value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((item) => (
            <StyledTableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.presentDays}</TableCell>
              <TableCell>{item.absentDays}</TableCell>
              <TableCell>{item.totalWorked}</TableCell>
              <TableCell>{item.payableAmount}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </TableBox>
    </Box>
  );
};

export default EmployeeTable;
