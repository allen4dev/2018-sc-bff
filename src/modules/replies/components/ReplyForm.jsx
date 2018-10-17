import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/Avatar';

const Wrapper = styled.form`
  background-color: ${({ theme: { colors } }) => colors.lightgray};
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: none;
  box-shadow: 0 0 2px ${({ theme: { colors } }) => colors.gray};
  flex: 1;
  margin: 0.5rem;
  padding: 0.3rem 0.5rem;
`;

const ReplyForm = () => (
  <Wrapper>
    <Avatar square src="/images/avatar.jpg" size="5%" />

    <Input placeholder="Escribe un comentario" />
  </Wrapper>
);

export default ReplyForm;
