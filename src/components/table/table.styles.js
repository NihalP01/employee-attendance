import styled from '@emotion/styled';
import { Table, TableRow } from '@mui/material';

export const TableBox = styled(Table)(() => ({}));

export const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(even)': {
    background: '#f0fffd',
  },
}));
