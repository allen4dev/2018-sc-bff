import React from 'react';
import styled from 'styled-components';

import { FaPlay } from 'react-icons/fa';

import Photo from 'components/shared/Photo';

import { Tag } from 'components/utils/Texts';
import { Button } from 'components/utils/Buttons';

import TrackPlayer from './TrackPlayer';

const Wrapper = styled.section`
  border: 4px solid hotpink;
  background-image: linear-gradient(to left, gray, lightgray);
  padding: 1rem;
  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'heading photo'
    'player photo';
`;

const Details = styled.div`
  display: flex;
  align-items: center;
`;

const Heading = styled.header`
  grid-area: heading;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const TagSection = styled.div``;

const TrackName = styled(Tag)`
  display: block;
  margin-top: 0.5rem;
`;

const Player = styled(TrackPlayer)`
  grid-area: player;
`;

const TrackPhoto = styled(Photo)`
  grid-area: photo;
  margin-left: 1rem;
`;

const Track = () => (
  <Wrapper>
    <Heading>
      <Details>
        <Button bgColor="orange" color="white" radius="50%">
          <FaPlay />
        </Button>
        <TagSection>
          <Tag bgColor="dark" size=".7rem">
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