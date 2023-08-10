import React from 'react';
import { CustomButton } from './baseButton.styles';

const BaseButton = (props) => {
  const { text, onClick, ...others } = props;
  return (
    <CustomButton variant="contained" onClick={onClick} {...others}>
      {text}
    </CustomButton>
  );
};

export default BaseButton;
