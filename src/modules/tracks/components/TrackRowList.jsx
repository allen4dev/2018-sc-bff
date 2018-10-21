import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';

import TrackRowItem from './TrackRowItem';

const Wrapper = styled.ul`
  padding: 1rem 0;
  display: grid;
  grid-gap: 1rem;
`;

const TrackRowList = ({ ids }) => (
  <Wrapper>
    {ids.map((id, index) => (
      <TrackRowItem key={index} /> // eslint-disable-line
    ))}
  </Wrapper>
);

TrackRowList.propTypes = {
  ids: arrayOf(string).isRequired,
};

export default TrackRowList;
