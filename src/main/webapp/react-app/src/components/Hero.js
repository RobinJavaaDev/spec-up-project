import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.section`
  background: linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
  border-bottom: 1px solid #eef2f6;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 20px 28px;
  text-align: center;
`;

const Location = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 999px;
  font-weight: 700;
  color: #0066cc;
  background: #e8f2ff;
  border: 1px solid #cfe4ff;
`;

const Title = styled.h1`
  margin: 14px 0 10px;
  font-size: 1.75rem;
  font-weight: 800;
  color: #222;
`;

const Sub = styled.p`
  color: #667085;
  font-size: 0.95rem;
  margin-bottom: 18px;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(8, minmax(0,1fr));
  gap: 10px;
  justify-items: center;

  @media (max-width: 992px) { grid-template-columns: repeat(6, 1fr); }
  @media (max-width: 640px) { grid-template-columns: repeat(4, 1fr); }
`;

const Pill = styled.button`
  width: 100%;
  max-width: 130px;
  background: #fff;
  border: 1px solid #e1e5ea;
  border-radius: 12px;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  color: #344054;
  transition: box-shadow .15s ease, transform .15s ease, border-color .15s ease;

  &:hover {
    border-color: #0066cc;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  }
`;

const Emoji = styled.span`
  font-size: 18px;
`;

const Hero = () => {
  const cats = [
    { id: 1, emoji: '📦', name: '중고거래' },
    { id: 2, emoji: '🏢', name: '알바' },
    { id: 3, emoji: '🏠', name: '부동산' },
    { id: 4, emoji: '🚗', name: '중고차' },
    { id: 5, emoji: '🧸', name: '동네생활' },
    { id: 6, emoji: '🍜', name: '맛집' },
    { id: 7, emoji: '🎮', name: '취미' },
    { id: 8, emoji: '📣', name: '모임' },
  ];

  return (
    <Wrapper>
      <Inner>
        <Location>📍 돈암1동</Location>
        <Title>의정부동에서 동네친구 찾고 계신가요?</Title>
        <Sub>원하는 항목을 선택해 바로 시작하세요.</Sub>
        <Categories>
          {cats.map(c => (
            <Pill key={c.id}>
              <Emoji>{c.emoji}</Emoji>
              {c.name}
            </Pill>
          ))}
        </Categories>
      </Inner>
    </Wrapper>
  );
};

export default Hero;







