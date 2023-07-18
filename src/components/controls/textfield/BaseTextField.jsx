import React from 'react';
import { CustomTextField } from './baseTextfield.styles';

const BaseTextField = (props) => {
  const { variant, size, type, onChange, label, value, ...others } = props;
  return (
    <CustomTextField
      label={label}
      onChange={onChange}
      value={value}
      variant={variant ? variant : 'outlined'}
      type={type}
      size={size ? size : 'small'}
      fullWidth
      {...others}
    />
  );
};

export default BaseTextField;
