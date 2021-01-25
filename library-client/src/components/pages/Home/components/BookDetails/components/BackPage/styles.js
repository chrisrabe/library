import styled from 'styled-components';
import colors from 'utils/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BlurbContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  height: 80%;
`;

export const Blurb = styled.div`
  height: 15px;
  border-radius: 5px;
  background-color: ${colors.dark};
  margin: 5px;
`;

export const BarCodeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 20%;
`;

export const BarCode = styled.div`
  width: 50%;
  height: 100%;
  padding: 20px;
  border: 2px solid ${colors.dark};
  text-align: center;
  font-weight: bold;
  display: flex;
  align-items: center;
`;
