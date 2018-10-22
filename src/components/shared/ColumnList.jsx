import React from 'react';
import styled from 'styled-components';
import { string, arrayOf, func } from 'prop-types';

import { Subtitle } from 'components/utils/Texts';

const Wrapper = styled.section`
  padding: 0.5rem 1rem;
`;

const Heading = styled.header`
  padding: 0.5rem 0 1rem;
`;

const List = styled.ul`
  border: 4px solid hotpink;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
`;

const Item = styled.li``;

const ColumnList = ({ title, ids, gap, children }) => (
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

ColumnList.defaultProps = {
  gap: '0',
};

ColumnList.propTypes = {
  ids: arrayOf(string).isRequired,
  gap: string,
  title: string.isRequired,
  children: func.isRequired,
};

export default ColumnList;
