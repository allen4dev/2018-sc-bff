import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin-top: ${({ theme: { sizes } }) => sizes.header};
`;

const Results = () => (
  <Wrapper>
    <p>Results here</p>
  </Wrapper>
);

export default Results;
