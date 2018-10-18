import React from 'react';
import styled from 'styled-components';
import { string, arrayOf, element } from 'prop-types';

import { Subtitle } from 'components/utils/Texts';

const Wrapper = styled.section`
  padding: 0.5rem 1rem;
`;

const Heading = styled.header`
  padding: 0.5rem 0 1rem;
`;

const List = styled.ul`
  display: grid;
  grid-gap: ${({ gap }) => gap};
`;

const RowList = ({ title, ids, gap, children }) => (
  <Wrapper>
    <Heading>
      <Subtitle color="dark">{title}</Subtitle>
    </Heading>
    <List gap={gap}>{ids.map((id, index) => children(index))}</List>
  </Wrapper>
);

RowList.defaultProps = {
  gap: '0',
};

RowList.propTypes = {
  ids: arrayOf(string).isRequired,
  gap: string,
  title: string.isRequired,
  children: element.isRequired,
};

export default RowList;
