import React from 'react';
import styled from 'styled-components';

import Logo from 'components/shared/Logo';
import Searchbar from 'components/shared/Searchbar';

import Artist from './components/Artist';
import Navigation from './components/Navigation';

const Wrapper = styled.header`
  height: ${({ theme }) => theme.sizes.header};
  background-color: ${({ theme: { colors } }) => colors.dark};

  display: grid;
  grid-template-columns: 1fr 2fr 5fr 3fr;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Authorized = () => (
  <Wrapper>
    <Logo />
    <Navigation />
    <Searchbar />
    <Artist />
  </Wrapper>
);

export default Authorized;
