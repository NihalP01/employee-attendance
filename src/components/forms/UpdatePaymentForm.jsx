import React, { useEffect, useState } from 'react';
import { UpdatePaymentBox } from './forms.styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { payableConst } from '../../constants/tableConst';
import { Controls } from '../controls';
import { Utils } from '../../utils/Utils';

const UpdatePaymentForm = () => {
  const [employees, setEmployees] = useState([]);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    setEmployees(JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS')));
  }, []);

  const handleDeduct = (id) => {
    const employee = employees.find((item) => item.employeeId === id);
    employee.amountTaken.push({ date: Utils.formattedDate(), amount });

    let employeeList =
      JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS')) || [];

    const index = employeeList.findIndex((item) => item.employeeId === id);

    if (index !== -1) {
      employeeList[index] = employee;
      localStorage.setItem('EMPLOYEE_DETAILS', JSON.stringify(employeeList));
    }
  };

  return (
    <UpdatePaymentBox>
      <Table>
        <TableHead>
          <TableRow>
            {payableConst.map((item) => (
              <TableCell key={item.id}>{item.value}</TableCell>
            ))}
            <TableCell></TableCell>
            {/* <TableCell></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((item) => (
            <TableRow key={item.employeeId}>
              <TableCell>{item.employeeName}</TableCell>
              <TableCell>{item.employeeDesignation}</TableCell>
              <TableCell>
                <Controls.BaseTextField
                  placeholder="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </TableCell>
              <TableCell>
                <Controls.BaseButton
                  text="Deduct"
                  color="error"
                  onClick={() => handleDeduct(item.employeeId)}
                />
              </TableCell>
              {/* <TableCell>
                <Controls.BaseButton
                  text="Add"
                  color="success"
                  onClick={handleAdd}
                />
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </UpdatePaymentBox>
  );
};

export default UpdatePaymentForm;
