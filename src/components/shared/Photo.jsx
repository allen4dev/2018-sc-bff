import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Image from 'components/utils/Image';

const Wrapper = styled.figure`
  width: ${({ size }) => size};
`;

const Photo = ({ size, src, className }) => (
  <Wrapper width={size} className={className}>
    <Image src={src} />
  </Wrapper>
);

Photo.defaultProps = {
  size: '100%',
};

Photo.propTypes = {
  className: string.isRequired,
  src: string.isRequired,
  size: string,
};

export default Photo;
