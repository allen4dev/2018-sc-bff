import styled from 'styled-components';
import { string } from 'prop-types';

export const Title = styled.h1`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  font-weight: normal;
`;

Title.defaultProps = {
  color: 'white',
  size: '1.5rem',
};

Title.propTypes = {
  color: string,
  size: string,
};

export const Text = styled.p`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size};
  line-height: 1.5rem;
`;

Text.defaultProps = {
  color: 'black',
  size: '1rem',
};

Text.propTypes = {
  color: string,
  size: string,
};
