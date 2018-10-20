import React from 'react';
import styled from 'styled-components';
import { FaPlay, FaHeart, FaShare } from 'react-icons/fa';

import { FlatButton } from 'components/utils/Buttons';

const Wrapper = styled.section`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Actions = styled.div`
  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Details = styled.ul`
  color: ${({ theme: { colors } }) => colors.darkgray};
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 1rem;
  }
`;

const Item = styled.li`
  align-items: center;

  & > svg {
    font-size: 0.8rem;
  }
`;

const Value = styled.span`
  margin-left: 0.2rem;
`;

const ResourceActions = () => (
  <Wrapper>
    <Actions>
      <FlatButton noHeight color="black" shadow="lightgray" radius="2px">
        <FaPlay /> Te gusta
      </FlatButton>
      <FlatButton noHeight color="black" shadow="lightgray" radius="2px">
        <FaShare /> Compartir
      </FlatButton>
    </Actions>
    <Details>
      <Item>
        <FaPlay /> <Value>2.290</Value>
      </Item>
      <Item>
        <FaHeart /> <Value>721</Value>
      </Item>
      <Item>
        <FaShare /> <Value>218</Value>
      </Item>
    </Details>
  </Wrapper>
);

export default ResourceActions;
