import React from 'react';
import styled from 'styled-components';

import Photo from 'components/shared/Photo';

const Wrapper = styled.article``;

const Details = styled.section``;

const Title = styled.h4``;

const Artist = styled.span``;

const TrackCard = () => (
  <Wrapper>
    <Photo src="images/track_card.png" />
    <Details>
      <Title>Emiya</Title>
      <Artist>Fate UBW</Artist>
    </Details>
  </Wrapper>
);

export default TrackCard;
