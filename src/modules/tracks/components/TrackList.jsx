import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';

import TrackListItem from './TrackListItem';

const Wrapper = styled.ul`
  padding: 0.5rem 2rem;
`;

const TrackList = ({ ids }) => (
  <Wrapper>
    {ids.map((id, index) => (
      // eslint-disable-next-line
      <TrackListItem key={index}>Track here</TrackListItem>
    ))}
  </Wrapper>
);

TrackList.propTypes = {
  ids: arrayOf(string).isRequired,
};

export default TrackList;
