import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(255, 255, 255) 100%);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  column-gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 12px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  
  img {
    height: 44px;
    width: auto;
    object-fit: contain;
    display: block;
  }

  .logo-text {
    display: none;
  }

  @media (min-width: 768px) {
    .logo-text { display: flex; flex-direction: column; }
    .logo-text .main-text { font-size: 1.6rem; font-weight: 800; color: #0066cc; line-height: 1; }
    .logo-text .sub-text { font-size: 0.85rem; color: #0066cc; line-height: 1; }
  }
`;

const SearchBar = styled.div`
  justify-self: center;
  width: 100%;
  max-width: 720px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
  
  form { width: 100%; }
  
  input {
    width: 100%;
    padding: 0.9rem 1.1rem;
    border: none;
    border-radius: 999px;
    font-size: 1rem;
    outline: none;
    background: rgba(0, 0, 0, 0.06);
    color: #0066cc;
    border: 1px solid #0066cc;
    
    &::placeholder {
      color: #0066cc;
      opacity: 0.7;
    }
    
    &:focus {
      background: rgba(0, 102, 204, 0.06);
      border-color: #0066cc;
      box-shadow: 0 0 0 3px rgba(0,102,204,0.12);
    }
  }
`;

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to="/">
            <img src="/images/header.icon.png" alt="DIV 중고거래플랫폼" />
            <div className="logo-text">
              <div className="main-text">DIV</div>
              <div className="sub-text">중고거래플랫폼</div>
            </div>
          </Link>
        </Logo>
        
        <SearchBar>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="상품을 검색해보세요..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </SearchBar>
        
        <div />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;

