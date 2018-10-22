import React from 'react';
import styled from 'styled-components';

import ColumnList from 'components/shared/ColumnList';
import PlaylistCard from '../../../../modules/playlists/components/PlaylistCard';

const likeIds = new Array(6).fill('');
const playlistIds = new Array(6).fill('');
const albumIds = new Array(6).fill('');
const followingIds = new Array(6).fill('');
const followersIds = new Array(6).fill('');

const Wrapper = styled.section``;

const Overview = () => (
  <Wrapper>
    <ColumnList title="Me gusta" ids={likeIds}>
      {({ id }) => <PlaylistCard id={id} details />}
    </ColumnList>
    <ColumnList title="Listas" ids={playlistIds}>
      {({ id }) => <div>Listas {id} </div>}
    </ColumnList>
    <ColumnList title="Albumes" ids={albumIds}>
      {({ id }) => <div>Albumes {id} </div>}
    </ColumnList>
    <ColumnList title="Siguiendo" ids={followingIds}>
      {({ id }) => <div>Siguiendo {id} </div>}
    </ColumnList>
    <ColumnList title="Seguidores" ids={followersIds}>
      {({ id }) => <div>Seguidores {id} </div>}
    </ColumnList>
  </Wrapper>
);

export default Overview;
