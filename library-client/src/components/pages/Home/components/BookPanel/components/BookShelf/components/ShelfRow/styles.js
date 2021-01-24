import styled from 'styled-components';
import colors from 'utils/colors';

export const Container = styled.div`
  width: 100%;
  min-height: 20%;
  margin-bottom: 10px;
`;

export const BookContainer = styled.div`
  display: flex;
  background-color: ${colors.dark};
  height: 75%;
  padding: 10px 20px 5px 20px;
  align-items: flex-end;
`;

export const LabelContainer = styled.div`
  height: 25%;
`;
