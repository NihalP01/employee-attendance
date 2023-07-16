import React from 'react';
import { CustomButton } from './baseButton.styles';

const BaseButton = (props) => {
  const { text, onClick } = props;
  return (
    <CustomButton variant="contained" onClick={onClick}>
      {text}
    </CustomButton>
  );
};

export default BaseButton;
