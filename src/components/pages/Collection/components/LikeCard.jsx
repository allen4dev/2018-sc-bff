import React from 'react';

import TrackCard from 'modules/tracks/components/TrackCard';
import PlaylistCard from 'modules/playlists/components/PlaylistCard';

const components = {
  tracks: TrackCard,
  playlists: PlaylistCard,
};

function renderCard(id, type) {
  const Card = components[type];

  // return React.cloneElement(<Card />, { id });
  return <Card id={id} details />;
}

const LikeCard = ({ id, type }) => renderCard(id, type);

export default LikeCard;
