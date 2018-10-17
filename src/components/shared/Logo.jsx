import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled(Link)`
  text-align: center;
  text-decoration: none;
`;

const Content = styled.h1`
  color: white;
  font-size: 1rem;
  text-transform: uppercase;
`;

const Logo = () => (
  <Wrapper to="/">
    <Content>Soundcloud</Content>
  </Wrapper>
);

export default Logo;
