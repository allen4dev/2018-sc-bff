import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';

import TrackRowItem from './TrackRowItem';

const Wrapper = styled.ul``;

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
