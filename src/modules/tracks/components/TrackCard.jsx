import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Photo from 'components/shared/Photo';

const Wrapper = styled.article``;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Details = styled.section`
  padding: 0.5rem 0;
`;

const Title = styled.h4`
  color: ${({ theme: { colors } }) => colors.dark};
  font-size: 1rem;
  font-weight: normal;
`;

const Artist = styled.span`
  color: ${({ theme }) => theme.colors.darkgray};
  font-size: 0.8rem;
`;

const TrackCard = () => (
  <Wrapper>
    <StyledLink to="/tracks/1">
      <Photo src="/images/track_card.png" />
    </StyledLink>
    <Details>
      <StyledLink to="/tracks/1">
        <Title>Emiya</Title>
      </StyledLink>
      <StyledLink to="/users/1">
        <Artist>Fate UBW</Artist>
      </StyledLink>
    </Details>
  </Wrapper>
);

export default TrackCard;
