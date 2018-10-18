import React from 'react';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

import Photo from 'components/shared/Photo';

const Wrapper = styled.article`
  display: flex;
  align-items: center;
`;

const Content = styled.section`
  padding: 0 1rem;
  flex: 1;
`;

const Artist = styled.h3`
  color: ${({ theme: { colors } }) => colors.darkgray};
  font-weight: normal;
`;

const Name = styled.h3`
  color: ${({ theme: { colors } }) => colors.dark};
  padding: 0.3rem 0;
`;

const Details = styled.ul``;

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

const PlaylistItem = () => (
  <Wrapper>
    <Photo src="/images/default_image.png" size="20%" />
    <Content>
      <Artist>Archer</Artist>
      <Name>Fate collection</Name>
      <Details>
        <Item>
          <FaHeart /> 623
        </Item>
      </Details>
    </Content>
  </Wrapper>
);

export default PlaylistItem;
