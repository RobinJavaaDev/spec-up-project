import React from 'react';

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TabsBar = styled.div`
  background: #ffffff;
  border-bottom: 1px solid #e9ecef;
`;

const TabsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 20px;
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

&::-webkit-scrollbar { display: none; }
`;

const Tab = styled(NavLink)`
  padding: 0.55rem 1rem;
  border: 1px solid #e1e5ea;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  color: #344054;
  background: #f8f9fa;
  text-decoration: none;
  white-space: nowrap;

  &.active {
    background: #0066cc;
    color: #fff;
    border-color: #0066cc;
  }
`;

const NavTabs = () => {
  return (
    <TabsBar>
      <TabsContainer>
        <Tab to="/" end>내 동네 찾기</Tab>
        <Tab to="/used">중고 거래</Tab>
        <Tab to="/community">커뮤니티 게시판</Tab>
        <Tab to="/chat">채팅방</Tab>
      </TabsContainer>
    </TabsBar>
  );
};

export default NavTabs;
