import React from 'react';
import styled from 'styled-components';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const Wrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Button = styled.button`
  color: ${({ theme: { colors } }) => colors.gray};
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
`;

const Feed = () => (
  <Wrapper>
    <Item>
      <Button>
        <FaBell />
      </Button>
    </Item>

    <Item>
      <Button>
        <FaEnvelope />
      </Button>
    </Item>
  </Wrapper>
);

export default Feed;
