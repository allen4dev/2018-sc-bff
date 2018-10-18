import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

import Image from 'components/utils/Image';

const Wrapper = styled.figure`
  width: ${({ width }) => width};
  min-width: 50px;
`;

const Photo = ({ size, src, className }) => (
  <Wrapper className={className} width={size}>
    <Image src={src} />
  </Wrapper>
);

Photo.defaultProps = {
  size: '100%',
  className: '',
};

Photo.propTypes = {
  className: string,
  src: string.isRequired,
  size: string,
};

export default Photo;
