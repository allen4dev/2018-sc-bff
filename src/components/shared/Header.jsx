import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navigation from './Navigation';

const Wrapper = styled.header`
  background-color: green;
  height: ${({ theme }) => theme.sizes.header};
  display: grid;
  grid-template-columns: 2fr 5fr 2fr;
  align-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledNavigation = styled(Navigation)`
  grid-column: 3/-1;
`;

const Header = () => (
  <Wrapper>
    <Logo />
    <StyledNavigation />
  </Wrapper>
);

export default Header;
