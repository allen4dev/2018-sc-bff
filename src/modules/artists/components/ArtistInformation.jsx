import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaShare } from 'react-icons/fa';

import ArtistItem from 'modules/artists/components/ArtistItem';

import AvatarList from 'components/shared/AvatarList';
import RowList from 'components/shared/RowList';

import { FlatButton } from 'components/utils/Buttons';

const followers = new Array(10).fill({});
const followingIds = new Array(10).fill('');

const Wrapper = styled.section`
  box-shadow: inset 1px 0 1px -1px ${({ theme: { colors } }) => colors.gray};
  padding: 0 1rem;
`;

const Heading = styled.header``;
const Content = styled.section``;

const Actions = styled.ul`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const Item = styled.li``;

const IconButton = styled(FlatButton)`
  & > svg {
    font-size: 1rem;
  }
`;

const Details = styled.ul`
  display: flex;
  align-items: center;

  & > *:not(:last-child) {
    box-shadow: inset -1px 0 0 ${({ theme: { colors } }) => colors.lightgray};
  }
`;
const Detail = styled.li`
  color: ${({ theme: { colors } }) => colors.darkgray};
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Value = styled.span`
  margin-bottom: 0.5rem;
`;

const Count = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Followers = styled.section``;
const Following = styled.section``;

const ArtistInformation = () => (
  <Wrapper>
    <Heading>
      <Actions>
        <Item>
          <FlatButton noHeight shadow="gray">
            Siguiendo
          </FlatButton>
        </Item>
        <Item>
          <FlatButton noHeight shadow="gray">
            <FaShare /> Compartir
          </FlatButton>
        </Item>
        <Item>
          <IconButton noHeight shadow="gray">
            <FaEnvelope />
          </IconButton>
        </Item>
      </Actions>
    </Heading>

    <Content>
      <Details>
        <Detail>
          <Value>Seguidores</Value>
          <Count>328</Count>
        </Detail>
        <Detail>
          <Value>Siguiendo</Value>
          <Count>741</Count>
        </Detail>
        <Detail>
          <Value>Tracks</Value>
          <Count>90</Count>
        </Detail>
      </Details>

      <Followers>
        <AvatarList title="Seguidores" artists={followers} />
      </Followers>

      <Following>
        <RowList title="Siguiendo" ids={followingIds}>
          {({ id }) => <ArtistItem id={id} />}
        </RowList>
      </Following>
    </Content>
  </Wrapper>
);

export default ArtistInformation;
