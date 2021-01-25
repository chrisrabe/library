import styled from 'styled-components';
import colors from 'utils/colors';

export const FormHeading = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  margin-top: 20%;
`;

export const BookPage = styled.div`
  background-color: ${colors.light};
  width: 400px;
  height: 700px;
  margin: 0 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorText = styled.div`
  margin: 0 10px;
  color: red;
  font-weight: bold;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled.input`
  background-color: ${colors.primary};
  color: ${colors.light};
  padding: 20px;
  border: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
`;
