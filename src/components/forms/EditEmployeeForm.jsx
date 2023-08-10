import React, { useEffect, useState } from 'react';
import { EditEmployeeFormBoxWrapper } from './forms.styles';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { Controls } from '../controls';
import { editEmployeeTableHeader } from '../../constants/tableConst';
import { SearchBox } from '../../pages/pages.styles';
import { STATIC_ASSETS } from '../../global/staticAssets';

const EditEmployeeForm = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [editingRows, setEditingRows] = useState({});
  const [editedFormData, setEditedFormData] = useState({});

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

    const updatedEmployeeList = employeeList.map((item) => {
      if (
        item.employeeId === employeeId &&
        editedFormData[employeeId]
      ) {
        return {
          ...item,
          ...editedFormData[employeeId],
        };
      }
      return item;
    });

    setEmployeeList(updatedEmployeeList);
    localStorage.setItem(
      'EMPLOYEE_DETAILS',
      JSON.stringify(updatedEmployeeList)
    );
  };

  const handleFormDataChange = (employeeId, field, value) => {
    setEditedFormData((prevFormData) => ({
      ...prevFormData,
      [employeeId]: {
        ...(prevFormData[employeeId] || {}),
        [field]: value,
      },
    }));
  };

  return (
    <EditEmployeeFormBoxWrapper>
      <SearchBox>
        <Controls.BaseTextField placeholder="Search employee" />
        <STATIC_ASSETS.SEARCH_ICON
          sx={{
            fontSize: '2rem',
            left: '-2rem',
            position: 'relative',
          }}
        />
      </SearchBox>
      <Table>
        <TableHead>
          <TableRow>
            {editEmployeeTableHeader.map((item) => (
              <TableCell key={item.id}>{item.value}</TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        {employeeList.length === 0 ? (
          <Controls.BaseTypography mt={4} text="No data available" />
        ) : (
          <TableBody>
            {employeeList.map((item) => (
              <TableRow key={item.employeeId}>
                <TableCell>
                  {editingRows[item.employeeId] ? (
                    <Controls.BaseTextField
                      placeholder={item.employeeName}
                      value={
                        editedFormData[item.employeeId]
                          ?.employeeName || ''
                      }
                      onChange={(e) =>
                        handleFormDataChange(
                          item.employeeId,
                          'employeeName',
                          e.target.value
                        )
                      }
                      fontSize={16}
                    />
                  ) : (
                    `${item.employeeName}`
                  )}
                </TableCell>
                <TableCell>
                  {editingRows[item.employeeId] ? (
                    <Controls.BaseTextField
                      placeholder={item.employeeDesignation}
                      value={
                        editedFormData[item.employeeId]
                          ?.employeeDesignation || ''
                      }
                      onChange={(e) =>
                        handleFormDataChange(
                          item.employeeId,
                          'employeeDesignation',
                          e.target.value
                        )
                      }
                      fontSize={16}
                    />
                  ) : (
                    `${item.employeeDesignation}`
                  )}
                </TableCell>
                <TableCell>
                  {editingRows[item.employeeId] ? (
                    <Controls.BaseTextField
                      placeholder={item.employeeWage}
                      value={
                        editedFormData[item.employeeId]
                          ?.employeeWage || ''
                      }
                      onChange={(e) =>
                        handleFormDataChange(
                          item.employeeId,
                          'employeeWage',
                          e.target.value
                        )
                      }
                      fontSize={16}
                    />
                  ) : (
                    `${item.employeeWage}`
                  )}
                </TableCell>
                <TableCell>
                  {editingRows[item.employeeId] ? (
                    <Controls.BaseTextField
                      placeholder={item.employeeAddress}
                      value={
                        editedFormData[item.employeeId]
                          ?.employeeAddress || ''
                      }
                      onChange={(e) =>
                        handleFormDataChange(
                          item.employeeId,
                          'employeeAddress',
                          e.target.value
                        )
                      }
                      fontSize={16}
                    />
                  ) : (
                    `${item.employeeAddress}`
                  )}
                </TableCell>
                <TableCell>
                  {editingRows[item.employeeId] ? (
                    <Controls.BaseTextField
                      placeholder={item.employeePhoneNumber}
                      value={
                        editedFormData[item.employeeId]
                          ?.employeePhoneNumber || ''
                      }
                      onChange={(e) =>
                        handleFormDataChange(
                          item.employeeId,
                          'employeePhoneNumber',
                          e.target.value
                        )
                      }
                      fontSize={16}
                    />
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
        )}
      </Table>
    </EditEmployeeFormBoxWrapper>
  );
};

export default EditEmployeeForm;
//die
