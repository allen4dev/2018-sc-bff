import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Image from 'components/utils/Image';

const Wrapper = styled.figure`
  width: ${({ size }) => size};
`;

const Photo = ({ size, src }) => (
  <Wrapper width={size}>
    <Image src={src} />
  </Wrapper>
);

Photo.defaultProps = {
  size: '100%',
};

Photo.propTypes = {
  src: string.isRequired,
  size: string,
};

export default Photo;
