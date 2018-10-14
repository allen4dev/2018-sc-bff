import React from 'react';
import styled from 'styled-components';

import image from '../images/default_image.png';

const Title = styled.h1`
  color: orange;
`;

const App = () => {
  return (
    <div>
      <Title>Soundcloud</Title>
      <img src={image} alt="" />
    </div>
  );
};

export default App;
