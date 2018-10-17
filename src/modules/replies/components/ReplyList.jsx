import React from 'react';
import styled from 'styled-components';
import { FaComment } from 'react-icons/fa';

import { Subtitle } from 'components/utils/Texts';

import Reply from './Reply';

const Wrapper = styled.section``;
const Heading = styled.header``;
const List = styled.ul``;

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
