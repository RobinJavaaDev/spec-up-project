import React from 'react';

import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 10px;
  padding: 0.9rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
  transition: all 0.2s;
  cursor: pointer;
  border: 1px solid #eef2f6;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    border-color: #dbe6f3;
  }
`;

const ImagePlaceholder = styled.div`
  width: 100%;
  height: 150px;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
  position: relative;
  overflow: hidden;
`;

const ProductName = styled.h3`
  font-size: 0.95rem;
  margin-bottom: 0.35rem;
  color: #172b4d;
  font-weight: 700;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight: 800;
  color: #0066cc;
`;

const Meta = styled.div`
  margin-top: 0.25rem;
  font-size: 0.8rem;
  color: #667085;
`;

const ProductCard = ({ product }) => {
  return (
    <Card>
      <ImagePlaceholder>
        {product.name}
      </ImagePlaceholder>
      <ProductName>{product.name}</ProductName>
      <Price>{product.price}</Price>
      <Meta>성수동 · 2시간 전</Meta>
    </Card>
  );
};

export default ProductCard;

