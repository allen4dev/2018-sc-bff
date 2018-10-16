import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import TrackCard from './TrackCard';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 1rem;
`;

const trackIds = new Array(12).fill({});

const TrackCardList = ({ className }) => (
  <Wrapper className={className}>
    {trackIds.map(id => (
      <TrackCard id={id} />
    ))}
  </Wrapper>
);

TrackCardList.propTypes = {
  className: string.isRequired,
};

export default TrackCardList;
