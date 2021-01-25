import styled from 'styled-components';
import colors from 'utils/colors';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${colors.primary};
  box-shadow: 0 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 40px;
`;
