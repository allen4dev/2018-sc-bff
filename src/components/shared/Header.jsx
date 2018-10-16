import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import Navigation from './Navigation';

const Wrapper = styled.header`
  height: ${({ theme }) => theme.sizes.header};
  display: grid;
  grid-template-columns: 3fr 6fr 3fr;
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