import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/Avatar';

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Details = styled.div`
  padding: 0.5rem 0;
`;

const Name = styled.h4`
  color: ${({ theme: { colors } }) => colors.darkgray};
`;

const ArtistCard = () => (
  <Wrapper>
    <Avatar src="/images/avatar.jpg" size="80%" />

    <Details>
      <Name>Archer</Name>
    </Details>
  </Wrapper>
);

export default ArtistCard;
