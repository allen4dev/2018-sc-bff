import React from 'react';
import styled from 'styled-components';
import { FaPlay } from 'react-icons/fa';

import Photo from 'components/shared/Photo';
import { Text } from 'components/utils/Texts';

const Wrapper = styled.li`
  box-shadow: inset 0 -1px 1px ${({ theme: { colors } }) => colors.lightgray};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const Number = styled.span`
  color: ${({ theme: { colors } }) => colors.dark};
`;

const Artist = styled.h3`
  color: ${({ theme: { colors } }) => colors.darkgray};
  font-weight: normal;
  padding: 0 1rem;

  &::after {
    content: '-';
    color: ${({ theme: { colors } }) => colors.dark};
    margin-left: 1rem;
  }
`;

const Count = styled.div`
  color: ${({ theme: { colors } }) => colors.darkgray};
`;

const Total = styled.span`
  margin-left: 0.5rem;
`;

const TrackListItem = () => (
  <Wrapper>
    <Photo src="/images/avatar.jpg" size="5%" />
    <Content>
      <Number>1</Number>
      <Artist>Fate UBW</Artist>
      <Text color="dark" size="1.2rem">
        Emiya (Archer theme)
      </Text>
    </Content>

    <Count>
      <FaPlay /> <Total>1409</Total>
    </Count>
  </Wrapper>
);

export default TrackListItem;
