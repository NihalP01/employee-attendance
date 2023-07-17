import { Box, Grid, styled } from '@mui/material';

export const DashboardWrapper = styled(Box)(() => ({}));

export const AttendanceWrapper = styled(Box)(() => ({}));

export const EmployeeWrapper = styled(Box)(() => ({}));

export const ManageWrapper = styled(Box)(() => ({

}));

export const HeadingWrapper = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '700px',
  justifyContent: 'space-between',
}));

export const EmployeeList = styled(Box)(() => ({}));

export const EmployeeTableList = styled(Box)(() => ({
  marginTop: '2rem',
}));

export const SearchBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '400px',
  justifyContent: 'center',
});

export const ButtonBox = styled(Box)(()=> ({
  
}))

export const ManageBox = styled(Grid)(() => ({
  marginTop: '4rem',
}));
