import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.aside`
  position: fixed;
  right: 24px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 20;

  @media (max-width: 992px) {
    display: none;
  }
`;

const Item = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #e1e5ea;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.06);
  transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: #0066cc;
    box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  }
`;

const Emoji = styled.span`
  font-size: 22px;
`;

const Label = styled.span`
  position: absolute;
  right: 70px;
  background: #333;
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(4px);
  transition: all .15s ease;
  pointer-events: none;

  ${Item}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const QuickMenu = () => {
  return (
    <Wrapper>
      <div style={{position:'relative'}}>
        <Item><Emoji>🛍️</Emoji></Item>
        <Label>판매 상품</Label>
      </div>
      <div style={{position:'relative'}}>
        <Item><Emoji>❤️</Emoji></Item>
        <Label>찜한 상품</Label>
      </div>
      <div style={{position:'relative'}}>
        <Item><Emoji>💬</Emoji></Item>
        <Label>채팅</Label>
      </div>
      <div style={{position:'relative'}}>
        <Item><Emoji>👤</Emoji></Item>
        <Label>내 정보</Label>
      </div>
      <div style={{position:'relative'}}>
        <Item><Emoji>⬆️</Emoji></Item>
        <Label>맨 위로</Label>
      </div>
    </Wrapper>
  );
};

export default QuickMenu;
