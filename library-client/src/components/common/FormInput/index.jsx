import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const LabelText = styled.div`
  padding: 5px 0;
  font-weight: bold;
`;

const FormInput = ({ label, onChange, value }) => (
  <Container>
    <LabelText>{label}</LabelText>
    <TextField variant="outlined" onChange={onChange} value={value} />
  </Container>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
};

export default FormInput;
