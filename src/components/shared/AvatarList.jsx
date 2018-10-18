import React from 'react';
import styled from 'styled-components';
import { string, arrayOf, object } from 'prop-types';

import Avatar from 'components/shared/Avatar';
import { Subtitle } from 'components/utils/Texts';

const Wrapper = styled.section`
  padding: 0.5rem 1rem;
`;

const Heading = styled.header`
  padding: 0.5rem 0 1rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const Item = styled.li`
  width: 48px;
  margin-right: -8px;
`;

const StyledAvatar = styled(Avatar)``;

const AvatarList = ({ title, artists }) => (
  <Wrapper>
    <Heading>
      <Subtitle color="dark">{title}</Subtitle>
    </Heading>
    <List>
      {artists.map((artist, index) => (
        // eslint-disable-next-line
        <Item key={index}>
          <StyledAvatar src="/images/avatar.jpg" />
        </Item>
      ))}
    </List>
  </Wrapper>
);

AvatarList.propTypes = {
  title: string.isRequired,
  artists: arrayOf(object).isRequired,
};

export default AvatarList;
