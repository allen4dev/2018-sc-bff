import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const Wrapper = styled.div``;

const TrackPlayer = ({ className }) => (
  <Wrapper className={className}>
    <p>TrackPlayer here</p>
  </Wrapper>
);

TrackPlayer.propTypes = {
  className: string.isRequired,
};

export default TrackPlayer;
