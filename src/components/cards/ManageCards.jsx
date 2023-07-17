import React from 'react';
import { Controls } from '../controls';
import { CardWrapper } from './cards.styles';

const ManageCards = (props) => {
  const { icon: Icon, value } = props;
  return (
    <CardWrapper>
      <Icon sx={{fontSize: '3rem'}} />
      <Controls.BaseTypography mt={1} variant="subtitle2" text={value} />
    </CardWrapper>
  );
};

export default ManageCards;
