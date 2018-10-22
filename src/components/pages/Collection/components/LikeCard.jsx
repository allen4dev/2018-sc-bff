import React from 'react';

import TrackCard from 'modules/tracks/components/TrackCard';
import SetCard from 'modules/playlists/components/SetCard';

const components = {
  tracks: TrackCard,
  playlists: SetCard,
};

function renderCard(id, type) {
  const Card = components[type];

  // return React.cloneElement(<Card />, { id });
  return <Card id={id} details />;
}

const LikeCard = ({ id, type }) => renderCard(id, type);

export default LikeCard;
