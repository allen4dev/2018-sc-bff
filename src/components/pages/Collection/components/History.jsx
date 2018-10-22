import React from 'react';
import styled from 'styled-components';

import ColumnList from 'components/shared/ColumnList';
import RowList from 'components/shared/RowList';

import SetCard from 'modules/playlists/components/SetCard';
import TrackRowItem from 'modules/tracks/components/TrackRowItem';

const Wrapper = styled.section``;

const playlistIds = new Array(10).fill('');
const trackIds = new Array(10).fill('');

const History = () => (
  <Wrapper>
    <ColumnList title="Escuchados recientemente" gap="1rem" ids={playlistIds}>
      {id => <SetCard id={id} details />}
    </ColumnList>

    <RowList
      title="Escucha las pistas que has reproducido"
      gap="1rem"
      ids={trackIds}>
      {id => <TrackRowItem id={id} />}
    </RowList>
  </Wrapper>
);

export default History;
