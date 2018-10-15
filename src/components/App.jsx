import React from 'react';
import styled from 'styled-components';

import Dummie from './nested/structure/Dummie';

const Title = styled.h1`
  color: orange;
`;

const App = () => (
  <div>
    <Title>Soundcloud</Title>
    <p>Here: we go</p>
    <Dummie />
  </div>
);

export default App;
