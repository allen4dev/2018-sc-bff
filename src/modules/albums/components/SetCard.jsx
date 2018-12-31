import React from 'react';
import styled from 'styled-components';
import { bool, string, number } from 'prop-types';

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

function renderFooter(details, attributes) {
  if (!details) return null;

  return (
    <Details>
      <Name>{attributes.title}</Name>
      <Artist>{attributes.username}</Artist>
    </Details>
  );
}

const SetCard = ({ details, photo, trackCount, title, username }) => (
  <Wrapper>
    <Photo>
      <Avatar src={photo} square />
      <TrackCount>
        <Total>{trackCount}</Total>
        <Text>Pistas</Text>
      </TrackCount>
    </Photo>
    {renderFooter(details, { title, username })}
  </Wrapper>
);

SetCard.defaultProps = {
  details: false,
};

SetCard.propTypes = {
  details: bool,
  photo: string.isRequired,
  trackCount: number.isRequired,
  title: string.isRequired,
  username: string.isRequired,
};

export default SetCard;
