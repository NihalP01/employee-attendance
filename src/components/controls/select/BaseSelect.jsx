import React from 'react';
import { CustomSelect } from './baseSelect.styles';
import { FormControl, MenuItem } from '@mui/material';

const BaseSelect = (props) => {
  const { value, label, onChange, options, size, ...others } = props;
  return (
    <FormControl fullWidth>
      <CustomSelect
        value={value}
        onChange={onChange}
        label={label}
        size={size ? size : 'small'}
        {...others}
      >
        {options.map((item) => (
          <MenuItem key={item.id} value={item.value}>
            {item.name}
          </MenuItem>
        ))}
      </CustomSelect>
    </FormControl>
  );
};

export default BaseSelect;
