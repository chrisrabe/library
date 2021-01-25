import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BookPage = styled(({ color, ...rest }) => <div {...rest} />)`
  background-color: ${(props) => props.color};
  width: 400px;
  height: 700px;
  margin: 0 10px;
  padding: 10px;
`;
