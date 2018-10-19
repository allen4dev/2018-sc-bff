import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';

const Wrapper = styled.ul``;

const TrackList = ({ ids }) => (
  <Wrapper>
    {ids.map((id, index) => (
      <p key={index}>Track here</p> // eslint-disable-line
    ))}
  </Wrapper>
);

TrackList.propTypes = {
  ids: arrayOf(string).isRequired,
};

export default TrackList;
