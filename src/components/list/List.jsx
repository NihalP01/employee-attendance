import React, { useState } from 'react';
import { Controls } from '../controls';
import { BoxWrapper, CustomList } from './list.styles';
import { Box } from '@mui/material';

const List = ({ empDetails }) => {
  const [editing, setEditing] = useState(false);
  const [textValue, setTextValue] = useState(empDetails.employeeName);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
  };

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <BoxWrapper>
      <CustomList>
        {editing ? (
          <Box>
            <Controls.BaseTextField
              value={textValue}
              placeholder="Name"
              onChange={handleChange}
            />
            <Controls.BaseTextField
              value={textValue}
              placeholder="Designation"
              onChange={handleChange}
            />

          </Box>
        ) : (
          <Box display={'flex'} justifyContent={'space-between'}>
            <Controls.BaseTypography
              text={textValue}
              variant="body1"
            />
            <Controls.BaseButton onClick={handleEdit} text="Edit" />
          </Box>
        )}
        {editing && (
          <Controls.BaseButton onClick={handleSave} text="Save" />
        )}
      </CustomList>
    </BoxWrapper>
  );
};

export default List;
