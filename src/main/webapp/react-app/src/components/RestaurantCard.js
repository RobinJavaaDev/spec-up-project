import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.2s;
  cursor: pointer;
  border-left: 4px solid #ff6b6b;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    border-left-width: 6px;
  }
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: #333;
  font-weight: 600;
`;

const Location = styled.div`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::before {
    content: '📍';
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #ffa500;
  font-weight: 600;
  
  &::before {
    content: '⭐';
  }
`;

const RestaurantCard = ({ restaurant }) => {
  return (
    <Card>
      <Title>{restaurant.name}</Title>
      <Location>{restaurant.location}</Location>
      <Description>{restaurant.description}</Description>
      <Rating>{restaurant.rating}</Rating>
    </Card>
  );
};

export default RestaurantCard;

