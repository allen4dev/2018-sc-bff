import React from 'react';
import styled from 'styled-components';

import image from 'images/default_image.png';

const Title = styled.h1`
  border: 4px solid ${props => props.theme.colors.myred};
  color: darkorange;
`;

const Dummie = () => (
  <div>
    <Title>Hey</Title>
    <img src={image} alt="" />
  </div>
);

export default Dummie;
