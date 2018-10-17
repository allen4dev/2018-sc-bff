import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  border: 4px solid hotpink;
`;

// receive the type of recommendations to show
// as a prop
const Recommendations = () => (
  <Wrapper>
    <p>Display the recommmendations here</p>
  </Wrapper>
);

export default Recommendations;
