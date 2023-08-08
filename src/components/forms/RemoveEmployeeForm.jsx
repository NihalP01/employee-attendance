import React from 'react';
import { BoxWrapper } from './forms.styles';
import { Box } from '@mui/material';
import { Controls } from '../controls';

const RemoveEmployeeForm = () => {
  return (
    <BoxWrapper>
      <Box>
        <Controls.BaseTypography text="Remove employee" />
      </Box>
    </BoxWrapper>
  );
};

export default RemoveEmployeeForm;
