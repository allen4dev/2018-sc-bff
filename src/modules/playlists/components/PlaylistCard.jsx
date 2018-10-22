import React from 'react';
import styled from 'styled-components';
import { bool } from 'prop-types';

import Avatar from 'components/shared/Avatar';

const Wrapper = styled.div``;

const Photo = styled.section`
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

const Details = styled.footer`
  padding: 0.5rem 0;
`;
const Name = styled.span`
  color: ${({ theme: { colors } }) => colors.dark};
  display: block;
  font-weight: bold;
`;
const Artist = styled.span`
  color: ${({ theme: { colors } }) => colors.darkgray};
`;

function renderFooter(details) {
  if (!details) return null;

  return (
    <Details>
      <Name>Fate collection</Name>
      <Artist>Fate</Artist>
    </Details>
  );
}

const PlaylistCard = ({ details }) => (
  <Wrapper>
    <Photo>
      <Avatar src="/images/avatar.jpg" square />
      <TrackCount>
        <Total>35</Total>
        <Text>Pistas</Text>
      </TrackCount>
    </Photo>
    {renderFooter(details)}
  </Wrapper>
);

PlaylistCard.defaultProps = {
  details: false,
};

PlaylistCard.propTypes = {
  details: bool,
};

export default PlaylistCard;
