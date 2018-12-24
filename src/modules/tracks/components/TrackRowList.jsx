import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';

import TrackRowItem from './TrackRowItem';

const Wrapper = styled.ul`
  display: grid;
  grid-gap: 1rem;
`;

const TrackRowList = ({ ids }) => (
  <Wrapper>
    {ids.map(id => (
      <TrackRowItem key={id} id={id} />
    ))}
  </Wrapper>
);

TrackRowList.propTypes = {
  ids: arrayOf(string).isRequired,
};

export default TrackRowList;
