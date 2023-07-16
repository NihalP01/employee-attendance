import React from 'react';
import { CustomTypography } from './basetypography.styles';

const BaseTypography = (props) => {
  const { text, color, fontSize, margin, variant, paddingxs, ...others } =
    props;
  return (
    <CustomTypography
      color={color}
      fontSize={fontSize}
      margin={margin}
      variant={variant}
      paddingxs={paddingxs}
      {...others}
    >
      {text}
    </CustomTypography>
  );
};

export default BaseTypography;
