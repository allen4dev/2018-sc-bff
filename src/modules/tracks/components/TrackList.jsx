import React from 'react';
import styled from 'styled-components';
import { arrayOf, string, bool } from 'prop-types';

import TrackListItem from './TrackListItem';

const Wrapper = styled.ul`
  padding: ${({ space }) => space && '0.5rem 2rem'};
`;

const TrackList = ({ ids, space }) => (
  <Wrapper space={space}>
    {ids.map((id, index) => (
      // eslint-disable-next-line
      <TrackListItem key={index} />
    ))}
  </Wrapper>
);

TrackList.defaultProps = {
  space: false,
};

TrackList.propTypes = {
  ids: arrayOf(string).isRequired,
  space: bool,
};

export default TrackList;
