import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaMusic } from 'react-icons/fa';

import Avatar from 'components/shared/Avatar';
import { Button, FlatButton } from 'components/utils/Buttons';

const Wrapper = styled.section`
  padding: 1rem;
`;

const Details = styled.section``;

const Heading = styled.header`
  margin-top: 0.5rem;
`;

const Name = styled.h3`
  color: ${({ theme: { colors } }) => colors.dark};
`;

const Information = styled.ul`
  padding: 1rem 0;
  display: flex;
  align-items: center;

  & > li:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

const Count = styled.li`
  color: ${({ theme: { colors } }) => colors.darkgray};
  display: flex;
  align-items: center;

  & > svg {
    color: ${({ theme: { colors } }) => colors.dark};
    margin-right: 0.5rem;
  }
`;

const Footer = styled.footer`
  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;

const ProfileCard = () => (
  <Wrapper>
    <Avatar src="/images/avatar.jpg" />

    <Details>
      <Heading>
        <Name>Allen</Name>
      </Heading>

      <Information>
        <Count>
          <FaUsers /> 917
        </Count>
        <Count>
          <FaMusic /> 72
        </Count>
      </Information>

      <Footer>
        <Button noHeight bgColor="orange" color="white" radius="5px">
          Seguir
        </Button>

        <FlatButton noHeight color="dark" shadow="lightgray">
          Denunciar
        </FlatButton>
      </Footer>
    </Details>
  </Wrapper>
);

export default ProfileCard;
