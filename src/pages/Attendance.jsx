import React, { useEffect, useState } from 'react';
import {
  AttendanceWrapper,
  ButtonBox,
  EmployeeList,
  HeadingWrapper,
  SearchBox,
} from './pages.styles';
import { Controls } from '../components/controls';
import { Components } from '../components';
import { STATIC_ASSETS } from '../global/staticAssets';
import { Box } from '@mui/material';
import { Utils } from '../utils/Utils';

const Attendance = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const savedAttendanceList = JSON.parse(
    localStorage.getItem('ATTENDANCE_LIST')
  );

  const [attendanceList, setAttendanceList] = useState(
    savedAttendanceList ? savedAttendanceList : []
  );

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('EMPLOYEE_DETAILS'));
    setEmployeeData(data);
  }, []);

  function attendanceCount() {
    const presentCount = attendanceList.filter(
      (a) => a.currentStatus === 'present'
    );
    return presentCount.length;
  }

  const onAttendanceChange = (id, name, status) => {
    const attendanceData = {
      id,
      name,
      currentStatus: status,
      attendance: [
        {
          status,
          attendanceDate: Utils.formattedDate(),
        },
      ],
    };

    setAttendanceList((prevList) => {
      const newList = [...prevList];
      const index = newList.findIndex((item) => item.id === id);
      if (index === -1) {
        newList.push(attendanceData);
      } else {
        const lastAttendance =
          newList[index].attendance[newList[index].attendance.length - 1];

        if (
          lastAttendance.attendanceDate !==
          attendanceData.attendance[0].attendanceDate
        ) {
          newList[index].attendance.push({
            status: attendanceData.attendance[0].status,
            attendanceDate: attendanceData.attendance[0].attendanceDate,
          });
        }
        newList[index].currentStatus = status;
        newList[index].attendance[newList[index].attendance.length - 1] = {
          status: attendanceData.attendance[0].status,
          attendanceDate: attendanceData.attendance[0].attendanceDate,
        };
      }
      return newList;
    });
  };

  const handleSubmitAttendance = () => {
    localStorage.setItem('ATTENDANCE_LIST', JSON.stringify(attendanceList));
    setOpenDialog(true);
  };

  const handleDialogButtonClick = () => {
    setOpenDialog(false);
  };

  function getStatus(id) {
    const attendance = attendanceList.find((a) => a.id === id);
    if (attendance) {
      return attendance.currentStatus;
    }
    return 'absent';
  }

  return (
    <AttendanceWrapper>
      <HeadingWrapper>
        <Controls.BaseTypography
          mt={2}
          variant="subtitle1"
          text={`Total Employees: ${employeeData?.length || 0}`}
        />
        <Controls.BaseTypography
          mt={2}
          variant="subtitle1"
          text={`Present: ${attendanceCount()}`}
        />
      </HeadingWrapper>
      <Box mt={6} display={'flex'} justifyContent={'space-between'}>
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
        <ButtonBox mr={'10rem'}>
          <Controls.BaseButton text="Save" onClick={handleSubmitAttendance} />
        </ButtonBox>
      </Box>
      <EmployeeList pl={2} mt={5}>
        {employeeData?.map((item) => (
          <Components.AttendanceList
            key={item.employeeId}
            employeeId={item.employeeId}
            employeeName={item.employeeName}
            attendanceStatus={getStatus(item.employeeId)}
            onAttendanceChange={onAttendanceChange}
          />
        ))}
      </EmployeeList>
      <Components.CustomDialog
        open={openDialog}
        setOpen={handleSubmitAttendance}
        title="Updated"
      >
        <Box>
          <Controls.BaseTypography
            text="Attendance updated successfully"
            variant="body2"
          />
        </Box>
        <Box mt={2} display={'flex'} justifyContent={'center'}>
          <Controls.BaseButton text="Ok" onClick={handleDialogButtonClick} />
        </Box>
      </Components.CustomDialog>
    </AttendanceWrapper>
  );
};

export default Attendance;
