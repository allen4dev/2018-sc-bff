import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUsers, FaMusic } from 'react-icons/fa';
import { bool } from 'prop-types';

import Avatar from 'components/shared/Avatar';
import { Button, FlatButton } from 'components/utils/Buttons';

const Wrapper = styled.section`
  padding: 1rem;
  display: ${({ flex }) => flex && 'flex'};
  align-items: ${({ flex }) => flex && 'flex-start'};
`;

const Details = styled.section`
  margin-left: ${({ flex }) => flex && '1.5rem'};
`;

const Heading = styled.header`
  margin-top: 0.5rem;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
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
  display: ${({ flex }) => flex && 'flex'};
  flex-direction: ${({ flex }) => flex && 'column'};
  align-items: ${({ flex }) => flex && 'flex-start'};

  & > :not(:last-child) {
    margin-bottom: ${({ flex }) => (flex ? '1rem' : '0')};
    margin-right: ${({ flex }) => (flex ? '0' : '1rem')};
  }
`;

const ProfileCard = ({ flex }) => (
  <Wrapper flex={flex}>
    <Avatar src="/images/avatar.jpg" />

    <Details flex={flex}>
      <Heading>
        <StyledLink to="/artists/1">
          <Name>Allen</Name>
        </StyledLink>
      </Heading>

      <Information>
        <Count>
          <FaUsers /> 917
        </Count>
        <Count>
          <FaMusic /> 72
        </Count>
      </Information>

      <Footer flex={flex}>
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

ProfileCard.defaultProps = {
  flex: false,
};

ProfileCard.propTypes = {
  flex: bool,
};

export default ProfileCard;
