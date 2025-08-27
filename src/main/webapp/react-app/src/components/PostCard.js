import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 0.2s;
  cursor: pointer;
  border-left: 4px solid #0066cc;
  
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

const Content = styled.p`
  color: #666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #999;
`;

const Author = styled.span`
  color: #0066cc;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  
  &::before {
    content: '👤';
    font-size: 0.8rem;
  }
`;

const Likes = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #ff6b6b;
  
  &::before {
    content: '❤️';
  }
`;

const PostCard = ({ post }) => {
  return (
    <Card>
      <Title>{post.title}</Title>
      <Content>{post.content}</Content>
      <Meta>
        <Author>{post.author}</Author>
        <Likes>{post.likes}</Likes>
      </Meta>
    </Card>
  );
};

export default PostCard;

