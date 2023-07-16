import React from 'react';
import { CustomTextField } from './baseTextfield.styles';

const BaseTextField = (props) => {
  const { variant, size, type, label, ...others } = props;
  return (
    <CustomTextField
      label={label}
      variant={variant ? variant : 'outlined'}
      type={type}
      size={size ? size : 'small'}
      fullWidth
      {...others}
    />
  );
};

export default BaseTextField;
