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

const EditEmployeeForm = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [editingRows, setEditingRows] = useState({});

  useEffect(() => {
    setEmployeeList(
      JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS'))
    );
  }, []);

  const handleEdit = (employeeId) => {
    setEditingRows((prevEditingRows) => ({
      ...prevEditingRows,
      [employeeId]: true,
    }));
  };

  const handleSave = (employeeId) => {
    setEditingRows((prevEditingRows) => ({
      ...prevEditingRows,
      [employeeId]: false,
    }));
  };

  return (
    <BoxWrapper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>Wage</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((item) => (
            <TableRow key={item.employeeId}>
              <TableCell>
                {editingRows[item.employeeId] ? (
                  <Controls.BaseTextField fontSize={16} />
                ) : (
                  `${item.employeeName}`
                )}
              </TableCell>
              <TableCell>
                {editingRows[item.employeeId] ? (
                  <Controls.BaseTextField fontSize={16} />
                ) : (
                  `${item.employeeDesignation}`
                )}
              </TableCell>
              <TableCell>
                {editingRows[item.employeeId] ? (
                  <Controls.BaseTextField fontSize={16} />
                ) : (
                  `${item.employeeWage}`
                )}
              </TableCell>
              <TableCell>
                {editingRows[item.employeeId] ? (
                  <Controls.BaseTextField fontSize={16} />
                ) : (
                  `${item.employeeAddress}`
                )}
              </TableCell>
              <TableCell>
                {editingRows[item.employeeId] ? (
                  <Controls.BaseTextField fontSize={16} />
                ) : (
                  `${item.employeePhoneNumber}`
                )}
              </TableCell>
              <TableCell>
                {!editingRows[item.employeeId] ? (
                  <Controls.BaseButton
                    onClick={() => handleEdit(item.employeeId)}
                    sx={{ height: 28 }}
                    text="Edit"
                  />
                ) : (
                  <Controls.BaseButton
                    sx={{ height: 28 }}
                    onClick={() => handleSave(item.employeeId)}
                    text="Save"
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BoxWrapper>
  );
};

export default EditEmployeeForm;
