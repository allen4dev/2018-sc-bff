import React from 'react';
import styled from 'styled-components';
import { FaUsers, FaMusic } from 'react-icons/fa';

import Avatar from 'components/shared/Avatar';
import { FlatButton } from 'components/utils/Buttons';

const Wrapper = styled.section`
  padding: .5rem 0
  display: flex;
  align-items: center;
`;

const Content = styled.section`
  flex: 1;
  margin-left: 1rem;
`;

const Heading = styled.header``;

const Name = styled.h3`
  font-weight: normal;
  color: ${({ theme: { colors } }) => colors.dark};
`;

const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Details = styled.ul`
  display: flex;
`;

const Item = styled.li`
  color: ${({ theme: { colors } }) => colors.gray};
`;

const Value = styled.span`
  padding: 0 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    color: ${({ theme: { colors } }) => colors.dark};
    margin-right: 0.5rem;
  }
`;

const Actions = styled.div``;

const ArtistItem = () => (
  <Wrapper>
    <Avatar src="/images/avatar.jpg" size="20%" />
    <Content>
      <Heading>
        <Name>Fate UBW</Name>
      </Heading>

      <Body>
        <Details>
          <Item>
            <Value>
              <FaUsers /> 11,8k
            </Value>
          </Item>

          <Item>
            <Value>
              <FaMusic /> 92
            </Value>
          </Item>
        </Details>

        <Actions>
          <FlatButton noHeight color="dark" shadow="gray">
            Seguir
          </FlatButton>
        </Actions>
      </Body>
    </Content>
  </Wrapper>
);

export default ArtistItem;
