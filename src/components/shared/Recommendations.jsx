import React, { Fragment } from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';

import TrackItem from 'modules/tracks/components/TrackItem';
import SetItem from 'modules/playlists/components/SetItem';

import RowList from 'components/shared/RowList';
import AvatarList from 'components/shared/AvatarList';

const Wrapper = styled.section``;

const Tracks = styled(RowList)``;
const Sets = styled(RowList)``;
const Favorites = styled(AvatarList)``;
const Shared = styled(AvatarList)``;

const trackIds = new Array(3).fill('');
const playlistIds = new Array(3).fill('');
const favArtists = new Array(9).fill({});
const sharedArtists = new Array(9).fill({});

function renderRecommendations(recommend) {
  return recommend ? (
    <Fragment>
      <Tracks title="Pistas similares" ids={trackIds} gap="1rem">
        {id => <TrackItem id={id} />}
      </Tracks>
      <Sets title="En listas" ids={playlistIds} gap="1rem">
        {id => <SetItem id={id} />}
      </Sets>
    </Fragment>
  ) : null;
}

const Recommendations = ({ recommend }) => (
  <Wrapper>
    {renderRecommendations(recommend)}
    <Favorites title="Me gusta" artists={favArtists} />
    <Shared title="Reposts" artists={sharedArtists} />
  </Wrapper>
);

Recommendations.defaultProps = {
  recommend: false,
};

Recommendations.propTypes = {
  recommend: bool,
};

export default Recommendations;
