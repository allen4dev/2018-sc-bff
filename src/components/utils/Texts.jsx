import styled from 'styled-components';
import { string } from 'prop-types';

export const Title = styled.h1`
  color: ${({ color, theme }) => theme.colors[color] || color};
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

export const Subtitle = styled.h2`
  color: ${({ color, theme }) => theme.colors[color] || color};
  font-size: ${({ size }) => size};
  font-weight: normal;
`;

Subtitle.defaultProps = {
  color: 'white',
  size: '1.5rem',
};

Subtitle.propTypes = {
  color: string,
  size: string,
};

export const Text = styled.p`
  color: ${({ color, theme }) => theme.colors[color] || color};
  font-size: ${({ size }) => size};
  line-height: 1.5rem;
  text-align: justify;
`;

Text.defaultProps = {
  color: 'black',
  size: '1rem',
};

Text.propTypes = {
  color: string,
  size: string,
};

export const Tag = styled.span`
  background-color: ${({ bgColor, theme }) => theme.colors[bgColor] || bgColor};
  color: ${({ color, theme }) => theme.colors[color] || color};
  font-size: ${({ size }) => size};
  padding: 0.3rem;
`;

Tag.defaultProps = {
  color: 'white',
  bgColor: 'transparent',
  size: '1rem',
};

Tag.propTypes = {
  color: string,
  bgColor: string,
  size: string,
};
