import React from 'react';

import styled from 'styled-components';

const SidebarContainer = styled.aside`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  height: fit-content;
  position: sticky;
  top: 20px;
  border-top: 4px solid #0066cc;
`;

const SidebarTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #333;
  border-bottom: 2px solid #0066cc;
  padding-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: #0066cc;
    border-radius: 50%;
  }
`;

const SidebarSection = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SidebarItem = styled.div`
  padding: 0.75rem;
  border-radius: 6px;
  background: #f8f9fa;
  margin-bottom: 0.5rem;
  cursor: pointer;
  transition: all 0.2s;
  border-left: 3px solid transparent;
  
  &:hover {
    background: #e9ecef;
    border-left-color: #0066cc;
    transform: translateX(5px);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemTitle = styled.div`
  font-weight: 500;
  color: #333;
  margin-bottom: 0.25rem;
`;

const ItemSubtitle = styled.div`
  font-size: 0.9rem;
  color: #666;
`;

const ChatbotButton = styled.button`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid #0066cc;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
    background: linear-gradient(135deg, #0066cc 0%, #004499 100%);
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarSection>
        <SidebarTitle>찜한 상품</SidebarTitle>
        <SidebarItem>
          <ItemTitle>빨간 마이크</ItemTitle>
          <ItemSubtitle>50,000원</ItemSubtitle>
        </SidebarItem>
        <SidebarItem>
          <ItemTitle>스타벅스 기프트카드</ItemTitle>
          <ItemSubtitle>30,000원</ItemSubtitle>
        </SidebarItem>
      </SidebarSection>

      <SidebarSection>
        <SidebarTitle>내 상점</SidebarTitle>
        <SidebarItem>
          <ItemTitle>상품 등록</ItemTitle>
          <ItemSubtitle>새로운 상품을 등록해보세요</ItemSubtitle>
        </SidebarItem>
        <SidebarItem>
          <ItemTitle>판매 관리</ItemTitle>
          <ItemSubtitle>판매 중인 상품을 관리하세요</ItemSubtitle>
        </SidebarItem>
      </SidebarSection>

      <SidebarSection>
        <SidebarTitle>최근 본 상품</SidebarTitle>
        <SidebarItem>
          <ItemTitle>운동화</ItemTitle>
          <ItemSubtitle>120,000원</ItemSubtitle>
        </SidebarItem>
        <SidebarItem>
          <ItemTitle>에어팟</ItemTitle>
          <ItemSubtitle>150,000원</ItemSubtitle>
        </SidebarItem>
      </SidebarSection>

      <SidebarSection>
        <ChatbotButton>
          💬 챗봇 연결
        </ChatbotButton>
      </SidebarSection>
    </SidebarContainer>
  );
};

export default Sidebar;

