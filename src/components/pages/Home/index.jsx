import React from 'react';
import styled from 'styled-components';

import Hero from 'components/shared/Hero';

import Content from './components/Content';

const Wrapper = styled.section``;

const Home = () => (
  <Wrapper>
    <Hero />
    <Content />
  </Wrapper>
);

export default Home;
