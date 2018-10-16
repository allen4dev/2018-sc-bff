import React from 'react';
import styled from 'styled-components';

import Hero from 'components/shared/Hero';

import Content from './components/Content';
import Download from './components/Download';
import About from './components/About';
import Join from './components/Join';

const Wrapper = styled.section`
  & > * {
    border: 4px solid blue;
  }
`;

const Home = () => (
  <Wrapper>
    <Hero />
    <Content />
    <Download />
    <About />
    <Join />
  </Wrapper>
);

export default Home;
