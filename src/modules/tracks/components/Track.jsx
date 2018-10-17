import React from 'react';
import styled from 'styled-components';

import { FaPlay } from 'react-icons/fa';

import Photo from 'components/shared/Photo';

import { Tag } from 'components/utils/Texts';
import { Button } from 'components/utils/Buttons';

import TrackPlayer from './TrackPlayer';

const Wrapper = styled.section`
  border: 4px solid hotpink;
  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'heading photo'
    'player photo';
`;

const Heading = styled.header`
  grid-area: heading;
  border: 4px solid blue;
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const TagSection = styled.div``;

const TrackName = styled(Tag)`
  display: block;
`;

const Player = styled(TrackPlayer)`
  grid-area: player;
  border: 4px solid blue;
`;

const TrackPhoto = styled(Photo)`
  grid-area: photo;
  width: 300px;
`;

const Track = () => (
  <Wrapper>
    <Heading>
      <Details>
        <Button bgColor="orange" color="white" radius="50%">
          <FaPlay />
        </Button>
        <TagSection>
          <Tag bgColor="dark" size=".8rem">
            Fate UBW
          </Tag>
          <TrackName bgColor="dark">Emiya</TrackName>
        </TagSection>
      </Details>

      <Tag>4 anios</Tag>
    </Heading>
    <Player />
    <TrackPhoto src="/images/track_card.png" />
  </Wrapper>
);

export default Track;
