import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/Avatar';

const Wrapper = styled.div`
  position: relative;
`;

const TrackCount = styled.div`
  background-color: ${({ theme: { colors } }) => colors.dark};
  border-radius: 50%;
  color: white;
  font-size: 0.8rem;
  font-weight: bold;
  padding: 1rem;
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Total = styled.span`
  font-size: 1rem;
`;

const Text = styled.span``;

const PlaylistCard = () => (
  <Wrapper>
    <Avatar src="/images/avatar.jpg" square />
    <TrackCount>
      <Total>35</Total>
      <Text>Pistas</Text>
    </TrackCount>
  </Wrapper>
);

export default PlaylistCard;
