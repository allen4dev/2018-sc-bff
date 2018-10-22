import React from 'react';
import styled from 'styled-components';
import { string, arrayOf, func } from 'prop-types';

import { Subtitle } from 'components/utils/Texts';

const Wrapper = styled.section`
  padding: 0.5rem 1rem;
`;

const Heading = styled.header`
  padding: 1rem 0 2rem;
`;

const List = styled.ul`
  display: grid;
  grid-gap: ${({ gap }) => gap};
`;

const Item = styled.li``;

const RowList = ({ title, ids, gap, children }) => (
  <Wrapper>
    <Heading>
      <Subtitle color="dark">{title}</Subtitle>
    </Heading>
    <List gap={gap}>
      {ids.map((id, index) => (
        <Item key={index}>{children(id)}</Item> // eslint-disable-line
      ))}
    </List>
  </Wrapper>
);

RowList.defaultProps = {
  gap: '0',
};

RowList.propTypes = {
  ids: arrayOf(string).isRequired,
  gap: string,
  title: string.isRequired,
  children: func.isRequired,
};

export default RowList;
