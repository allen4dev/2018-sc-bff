import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaHeart, FaShare, FaComment } from 'react-icons/fa';

import Photo from 'components/shared/Photo';

const Wrapper = styled.li`
  display: flex;
  align-items: center;
`;

const Content = styled.section`
  flex: 1;
  padding: 0 1rem;
`;

const Artist = styled.h3`
  color: ${({ theme: { colors } }) => colors.darkgray};
  font-weight: normal;
`;

const Name = styled.h3`
  color: ${({ theme: { colors } }) => colors.dark};
  padding: 0.3rem 0;
`;

const Details = styled.ul`
  display: flex;

  & > :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Item = styled.li`
  color: ${({ theme: { colors } }) => colors.gray};
  display: flex;
  align-items: center;

  & > svg {
    color: ${({ theme: { colors } }) => colors.darkgray};
    font-size: 0.8rem;
    margin-right: 0.5rem;
  }
`;

const TrackItem = () => (
  <Wrapper>
    <Photo src="/images/avatar.jpg" size="20%" />
    <Content>
      <Artist>Fate UBW</Artist>
      <Name>Emiya (Archer Theme)</Name>
      <Details>
        <Item>
          <FaPlay /> 48.7k
        </Item>

        <Item>
          <FaHeart /> 433
        </Item>

        <Item>
          <FaShare /> 18
        </Item>

        <Item>
          <FaComment /> 9
        </Item>
      </Details>
    </Content>
  </Wrapper>
);

export default TrackItem;
