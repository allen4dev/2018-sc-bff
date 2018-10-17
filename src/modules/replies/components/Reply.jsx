import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/Avatar';

import { Text } from 'components/utils/Texts';

const Wrapper = styled.li`
  display: flex;
  align-items: flex-start;
`;

const Content = styled.section`
  flex: 1;
  margin: 0 2rem;
`;

const Heading = styled.header``;

const Artist = styled.h4`
  color: ${({ theme: { colors } }) => colors.gray};
  margin-bottom: 0.5rem;
`;

const Date = styled.span`
  color: ${({ theme: { colors } }) => colors.gray};
  font-size: 0.8rem;
`;

const Reply = () => (
  <Wrapper>
    <Avatar src="/images/avatar.jpg" size="12%" />
    <Content>
      <Heading>
        <Artist>Archer</Artist>
      </Heading>
      <Text color="dark">
        Some random and large comment who probably will be ignored
      </Text>
    </Content>
    <Date>Hace 1 anio</Date>
  </Wrapper>
);

export default Reply;
