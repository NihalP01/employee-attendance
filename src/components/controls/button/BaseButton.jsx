import React from 'react';
import { CustomButton } from './baseButton.styles';

const BaseButton = (props) => {
  const { text, color, onClick, ...others } = props;
  return (
    <CustomButton
      variant="contained"
      color={color}
      onClick={onClick}
      {...others}
    >
      {text}
    </CustomButton>
  );
};

export default BaseButton;
