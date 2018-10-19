import React from 'react';
import styled from 'styled-components';

import Avatar from 'components/shared/Avatar';
import { Tag } from 'components/utils/Texts';

const Wrapper = styled.header`
  height: 50vh;
  background-image: url('/images/profileImage.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const Content = styled.section`
  display: flex;
  align-items: flex-start;
`;

const Information = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > :first-child {
    margin-bottom: 0.3rem;
  }
`;

const Heading = () => (
  <Wrapper>
    <Content>
      <Avatar src="/images/avatar.jpg" />
      <Information>
        <Tag bgColor="dark" size="1.3rem">
          Emiya Shirou
        </Tag>
        <Tag bgColor="dark" color="gray">
          Archer
        </Tag>
      </Information>
    </Content>
  </Wrapper>
);

export default Heading;
