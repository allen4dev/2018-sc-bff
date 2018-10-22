import React from 'react';
import styled from 'styled-components';

import { Subtitle } from 'components/utils/Texts';

import LikeCard from './LikeCard';

const likedList = [
  {
    id: '1',
    liked_id: '4',
    type: 'tracks',
  },
  {
    id: '2',
    liked_id: '1',
    type: 'playlists',
  },
  {
    id: '3',
    liked_id: '24',
    type: 'tracks',
  },
];

const Wrapper = styled.section``;

const Heading = styled.header`
  padding: 1rem 0;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const Likedtab = () => (
  <Wrapper>
    <Heading>
      <Subtitle color="dark">Me gusta</Subtitle>
    </Heading>

    <List>
      {likedList.map(({ id, type }, index) => (
        // eslint-disable-next-line
        <LikeCard key={index} id={id} type={type} />
      ))}
    </List>
  </Wrapper>
);

export default Likedtab;
