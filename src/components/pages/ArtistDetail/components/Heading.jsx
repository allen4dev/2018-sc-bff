import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

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

const Heading = ({ username, fullname, avatar }) => (
  <Wrapper>
    <Content>
      <Avatar src={avatar} />
      <Information>
        <Tag bgColor="dark" size="1.3rem">
          {fullname}
        </Tag>
        <Tag bgColor="dark" color="gray">
          {username}
        </Tag>
      </Information>
    </Content>
  </Wrapper>
);

Heading.defaultProps = {
  fullname: 'fullname',
  avatar: 'https://sc-api/example.test',
};

Heading.propTypes = {
  username: string.isRequired,
  fullname: string,
  avatar: string,
};

export default Heading;
