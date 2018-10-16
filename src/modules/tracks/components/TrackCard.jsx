import React from 'react';
import styled from 'styled-components';

import Photo from 'components/shared/Photo';

const Wrapper = styled.article``;

const Details = styled.section`
  padding: 0.5rem 0;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 0.3rem;
`;

const Artist = styled.span`
  color: ${({ theme }) => theme.colors.darkgray};
`;

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
