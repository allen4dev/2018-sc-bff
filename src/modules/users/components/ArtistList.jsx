import React from 'react';
import styled from 'styled-components';
import { arrayOf, string } from 'prop-types';

import ProfileCard from './ProfileCard';

const Wrapper = styled.ul``;
const Item = styled.li``;

const ArtistList = ({ ids }) => (
  <Wrapper>
    {ids.map((id, index) => (
      // eslint-disable-next-line
      <Item key={index}>
        <ProfileCard id={id} flex />
      </Item>
    ))}
  </Wrapper>
);

ArtistList.propTypes = {
  ids: arrayOf(string).isRequired,
};

export default ArtistList;
