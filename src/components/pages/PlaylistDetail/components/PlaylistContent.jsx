import React from 'react';
import styled from 'styled-components';

import ProfileCard from 'modules/artists/components/ProfileCard';
import TrackList from 'modules/tracks/components/TrackList';

import ResourceActions from 'components/shared/ResourceActions';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-areas:
    'heading heading'
    'card tracks';
`;

const Heading = styled.header`
  grid-area: heading;
`;

const Actions = styled(ResourceActions)``;

const Card = styled(ProfileCard)`
  grid-area: card;
`;

const Tracks = styled(TrackList)`
  grid-area: tracks;
`;

const trackIds = new Array(10).fill('');

const SetContent = () => (
  <Wrapper>
    <Heading>
      <Actions />
    </Heading>
    <Card />
    <Tracks space ids={trackIds} />
  </Wrapper>
);

export default SetContent;
