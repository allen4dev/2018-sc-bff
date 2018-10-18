import React from 'react';
import styled from 'styled-components';
import { string, arrayOf, element } from 'prop-types';

const Wrapper = styled.ul``;

const RowList = ({ ids, children }) => (
  <Wrapper>{ids.map((id, index) => children(index))}</Wrapper>
);

RowList.propTypes = {
  ids: arrayOf(string).isRequired,
  children: element.isRequired,
};

export default RowList;
