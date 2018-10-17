import React from 'react';
import styled from 'styled-components';

import ResourceActions from 'components/shared/ResourceActions';

import ReplyForm from './ReplyForm';

const Wrapper = styled.div``;

const ReplyBar = () => (
  <Wrapper>
    <ReplyForm />
    <ResourceActions />
  </Wrapper>
);

export default ReplyBar;
