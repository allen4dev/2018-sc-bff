import React from 'react';
import styled from 'styled-components';

import ColumnList from 'components/shared/ColumnList';

import SetCard from 'modules/playlists/components/SetCard';
import TrackCard from 'modules/tracks/components/TrackCard';
import ArtistCard from 'modules/users/components/ArtistCard';

const likeIds = new Array(6).fill('');
const playlistIds = new Array(6).fill('');
const albumIds = new Array(6).fill('');
const followingIds = new Array(6).fill('');
const followersIds = new Array(6).fill('');

const Wrapper = styled.section``;

const Overview = () => (
  <Wrapper>
    <ColumnList title="Me gusta" gap="1rem" ids={likeIds}>
      {({ id }) => <TrackCard id={id} />}
    </ColumnList>

    <ColumnList title="Listas" gap="1rem" ids={playlistIds}>
      {({ id }) => <SetCard id={id} details />}
    </ColumnList>

    <ColumnList title="Albumes" gap="1rem" ids={albumIds}>
      {({ id }) => <div>Albumes {id} </div>}
    </ColumnList>

    <ColumnList title="Siguiendo" gap="1rem" ids={followingIds}>
      {({ id }) => <ArtistCard id={id} />}
    </ColumnList>

    <ColumnList title="Seguidores" gap="1rem" ids={followersIds}>
      {({ id }) => <ArtistCard id={id} />}
    </ColumnList>
  </Wrapper>
);

export default Overview;
