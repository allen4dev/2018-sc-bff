import styled from 'styled-components';

export const Button = styled.button`
  color: ${({ color, theme }) => color || theme.colors.black};
  background-color: ${({ bgColor = 'white', theme }) =>
    theme.colors[bgColor] || bgColor};
  border-radius: ${({ radius }) => radius && radius};
  width: ${({ flexible }) => flexible && '100%'};
  box-shadow: ${({ bgColor, theme }) =>
    `inset 0 0 0 1px ${theme.colors[bgColor] || bgColor}`};
  border: none;
  padding: 0.3rem 0.5rem;
  text-align: center;
`;

export const FlatButton = styled(Button)`
  background-color: transparent;
  box-shadow: ${({ color, theme }) =>
    `inset 0 0 0 1px ${theme.colors[color] || color}`};
`;
