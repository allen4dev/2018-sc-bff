import React, { Fragment } from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';

import RowList from 'components/shared/RowList';
import AvatarList from 'components/shared/AvatarList';

const Wrapper = styled.section`
  border: 4px solid hotpink;
`;

const Tracks = styled(RowList)``;
const Playlists = styled(RowList)``;
const Favorites = styled(AvatarList)``;
const Shared = styled(AvatarList)``;

const trackIds = new Array(3).fill({});
const playlistIds = new Array(3).fill({});

function renderRecommendations(recommend) {
  return recommend ? (
    <Fragment>
      <Tracks ids={trackIds}>{id => <span>Track id: {id}</span>}</Tracks>
      <Playlists ids={playlistIds}>
        {id => <span>Playlist id: {id}</span>}
      </Playlists>
    </Fragment>
  ) : null;
}

const Recommendations = ({ recommend }) => (
  <Wrapper>
    {renderRecommendations(recommend)}
    <Favorites />
    <Shared />
  </Wrapper>
);

Recommendations.defaultProps = {
  recommend: false,
};

Recommendations.propTypes = {
  recommend: bool,
};

export default Recommendations;
