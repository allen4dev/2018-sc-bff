import React from 'react';
import styled from 'styled-components';
import { bool, string } from 'prop-types';

import Image from 'components/utils/Image';

const Wrapper = styled.figure`
  border-radius: ${({ square }) => (square ? '0' : '50%')};
  width: ${({ size }) => size};
  min-width: 48px;
  overflow: hidden;
`;

const Avatar = ({ src, square, size, className }) => (
  <Wrapper className={className} square={square} size={size}>
    <Image src={src} />
  </Wrapper>
);

Avatar.defaultProps = {
  square: false,
  size: '100%',
};

Avatar.propTypes = {
  square: bool,
  size: string,
  src: string.isRequired,
  className: string.isRequired,
};

export default Avatar;
