import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.myred};
`;

const Home = () => (
  <div>
    <Title>Homepage</Title>
  </div>
);

export default Home;
