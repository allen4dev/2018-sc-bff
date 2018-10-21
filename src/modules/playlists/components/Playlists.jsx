import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';

import Playlist from './Playlist';

const Wrapper = styled.section`
  display: grid;
  grid-gap: 2rem;
`;

const Playlists = ({ ids }) => (
  <Wrapper>
    {ids.map((id, index) => (
      // eslint-disable-next-line
      <Playlist key={index} />
    ))}
  </Wrapper>
);

Playlists.propTypes = {
  ids: arrayOf(string).isRequired,
};

export default Playlists;
