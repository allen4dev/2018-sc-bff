import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.figure`
  text-align: center;
  text-decoration: none;
`;

const Content = styled.h1`
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
`;

const Logo = () => (
  <Wrapper>
    <Content>Soundcloud</Content>
  </Wrapper>
);

export default Logo;
