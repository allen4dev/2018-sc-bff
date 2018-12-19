import React from 'react';
import styled from 'styled-components';
import { shape, string } from 'prop-types';

import Avatar from 'components/shared/Avatar';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Artist = styled.span`
  color: ${({ theme: { colors } }) => colors.gray};
  margin-left: 0.5rem;
`;

const Menu = ({ user }) => (
  <Wrapper>
    <Avatar src={user.avatar} size="40px" />
    <Artist>{user.username}</Artist>
  </Wrapper>
);

Menu.propTypes = {
  user: shape({
    username: string,
    avatar: string,
  }).isRequired,
};

export default Menu;