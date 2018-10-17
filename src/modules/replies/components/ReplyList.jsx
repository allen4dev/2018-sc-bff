import React from 'react';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';

import { Subtitle } from 'components/utils/Texts';

import Reply from './Reply';

const Wrapper = styled.section`
  padding: 1rem;
`;

const Heading = styled.header`
  padding: 1.5rem 0;
`;

const List = styled.ul`
  display: grid;
  grid-gap: 2rem;
`;

const replies = new Array(10).fill({});

const ReplyList = () => (
  <Wrapper>
    <Heading>
      <Subtitle color="gray">
        <FaComment />
        10 Comentarios
      </Subtitle>
    </Heading>

    <List>
      {replies.map((id, index) => (
        <Reply key={index} id={id} /> // eslint-disable-line
      ))}
    </List>
  </Wrapper>
);

export default ReplyList;
