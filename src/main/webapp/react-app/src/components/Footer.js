import React from 'react';

import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: rgb(255, 255, 255);
  color: white;
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const FooterText = styled.p`
  margin: 0;
  color: #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © 2024 중고거래 플랫폼. 지역기반 커뮤니티 & 중고 거래 플랫폼
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;






