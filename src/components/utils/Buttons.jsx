import styled from 'styled-components';
import { string } from 'prop-types';

export const Button = styled.button`
  color: ${({ color, theme }) => color || theme.colors.black};
  background-color: ${({ bgColor, theme }) => theme.colors[bgColor] || bgColor};
  border-radius: ${({ radius }) => radius && radius};
  width: ${({ flexible }) => flexible && '100%'};
  box-shadow: ${({ bgColor, theme }) =>
    `inset 0 0 0 1px ${theme.colors[bgColor] || bgColor}`};
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  text-align: center;
`;

Button.defaultProps = {
  bgColor: 'white',
};

Button.propTypes = {
  bgColor: string,
};

export const FlatButton = styled(Button)`
  background-color: transparent;
  box-shadow: ${({ color, theme }) =>
    `inset 0 0 0 1px ${theme.colors[color] || color}`};
`;