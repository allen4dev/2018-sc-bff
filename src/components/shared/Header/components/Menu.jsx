import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/Avatar';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Artist = styled.span`
  color: ${({ theme: { colors } }) => colors.gray};
  margin-left: 0.5rem;
`;

const Menu = () => (
  <Wrapper>
    <Avatar src="/images/avatar.jpg" size="40px" />
    <Artist>Archer</Artist>
  </Wrapper>
);

export default Menu;
