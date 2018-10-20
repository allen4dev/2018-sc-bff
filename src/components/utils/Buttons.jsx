import styled from 'styled-components';
import { string } from 'prop-types';

export const Button = styled.button`
  color: ${({ color, theme }) => color || theme.colors.black};
  background-color: ${({ bgColor, theme }) => theme.colors[bgColor] || bgColor};
  border-radius: ${({ radius }) => radius && radius};
  width: ${({ flexible }) => flexible && '100%'};
  box-shadow: ${({ bgColor, theme }) =>
    `inset 0 0 0 1px ${theme.colors[bgColor] || bgColor}`};
  font-size: ${({ size }) => size};
  min-height: 48px;
  min-height: ${({ noHeight }) => noHeight && 'auto'};
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  text-align: center;
  min-width: 48px;

  & > svg {
    font-size: 0.8rem;
  }
`;

Button.defaultProps = {
  bgColor: 'white',
  size: '1rem',
};

Button.propTypes = {
  bgColor: string,
  size: string,
};

export const FlatButton = styled(Button)`
  background-color: transparent;
  box-shadow: ${({ color, shadow, theme: { colors } }) =>
    `inset 0 0 0 1px ${
      shadow ? colors[shadow] || shadow : colors[color] || color
    }`};
`;
