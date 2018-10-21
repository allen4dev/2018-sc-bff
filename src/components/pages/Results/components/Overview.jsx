import React from 'react';
import styled from 'styled-components';

import ArtistList from 'modules/artists/components/ArtistList';
import TrackRowList from 'modules/tracks/components/TrackRowList';
import Playlists from 'modules/playlists/components/Playlists';

const artistIds = new Array(5).fill('');
const trackIds = new Array(5).fill('');
const playlistIds = new Array(5).fill('');

const Wrapper = styled.section`
  padding: 1rem;
`;

const Overview = () => (
  <Wrapper>
    <ArtistList ids={artistIds} />
    <TrackRowList ids={trackIds} />
    <Playlists ids={playlistIds} />
  </Wrapper>
);

export default Overview;
