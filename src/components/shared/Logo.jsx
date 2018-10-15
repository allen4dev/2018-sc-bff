import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  border: 4px solid red;
  text-align: center;
  padding: 0.5rem;
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
