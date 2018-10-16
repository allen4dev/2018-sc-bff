import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const Wrapper = styled.form``;
const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.lightgray};
  border: none;
  font-size: 1rem;
  padding: 0.5rem;
  width: 100%;
`;

const Searchbar = ({ className }) => (
  <Wrapper className={className}>
    <Input placeholder="Buscar artistas, grupos, pistas y podcasts" />
  </Wrapper>
);

Searchbar.propTypes = {
  className: string.isRequired,
};

export default Searchbar;
