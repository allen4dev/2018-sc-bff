import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';

import Set from './Set';

const Wrapper = styled.section`
  display: grid;
  grid-gap: 2rem;
`;

const Sets = ({ ids }) => (
  <Wrapper>
    {ids.map(id => (
      <Set key={id} id={id} />
    ))}
  </Wrapper>
);

Sets.propTypes = {
  ids: arrayOf(string).isRequired,
};

export default Sets;
