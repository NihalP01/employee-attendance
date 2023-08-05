import React, { useState } from 'react';
import { Controls } from '../controls';
import { BoxWrapper, SideBarBox, UserBox } from './sidebar.styles';
import { Avatar, Box } from '@mui/material';
import { sidebarConst } from '../../constants/sidebarConst';
import { StyledLink } from '../../global/global';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('');
  const handleClick = (id) => {
    setActiveTab(id);
  };

  const adminName = 'User Name';
  const avatarName = adminName.slice(0, 1);
  return (
    <BoxWrapper>
      <UserBox m={2}>
        <Avatar>{avatarName}</Avatar>
        <Controls.BaseTypography
          variant="body3"
          ml={'0.5rem'}
          text={adminName}
        />
      </UserBox>
      <Box>
        {sidebarConst.map((item) => (
          <StyledLink to={item.link} key={item.id}>
            <SideBarBox
              isactive={activeTab === item.id ? 'true' : 'false'}
              onClick={() => handleClick(item.id)}
              display={'flex'}
            >
              <item.icon />
              <Controls.BaseTypography
                fontWeight={activeTab === item.id ? 600 : ''}
                ml={2}
                text={item.value}
              />
            </SideBarBox>
          </StyledLink>
        ))}
      </Box>
    </BoxWrapper>
  );
};

export default Sidebar;
