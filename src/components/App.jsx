import React from 'react';
import styled from 'styled-components';

import Dummie from './nested/structure/Dummie.jsx';

const Title = styled.h1`
  color: orange;
`;

const App = () => {
  return (
    <div>
      <Title>Soundcloud</Title>
      <p>Here:</p>
      <Dummie />
    </div>
  );
};

export default App;
