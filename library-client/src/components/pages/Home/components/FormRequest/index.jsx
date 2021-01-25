import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useForm, Controller } from 'react-hook-form';
import FormInput from 'components/common/FormInput';
import {
  BookPage,
  FormHeading,
  ErrorText,
  Form,
  SubmitButton,
  ButtonContainer,
} from './styles';

const FormRequest = ({ headingText, onSubmit, selectedBook }) => {
  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      name: selectedBook ? selectedBook.name : '',
      isbn: selectedBook ? selectedBook.isbn : '',
      firstname:
        selectedBook && selectedBook.author
          ? selectedBook.author.first_name
          : '',
      lastname:
        selectedBook && selectedBook.author
          ? selectedBook.author.last_name
          : '',
    },
  });

  const onValid = useCallback(
    (data) => {
      if (onSubmit) {
        onSubmit(data, selectedBook);
      }
    },
    [selectedBook, onSubmit],
  );

  return (
    <BookPage>
      <FormHeading>{headingText}</FormHeading>
      <Form onSubmit={handleSubmit(onValid)}>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <FormInput label="Book Title" onChange={onChange} value={value} />
          )}
        />
        {errors.name && <ErrorText>Book title is required</ErrorText>}
        <Controller
          name="isbn"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <FormInput label="ISBN" onChange={onChange} value={value} />
          )}
        />
        {errors.isbn && <ErrorText>Book ISBN is required</ErrorText>}
        <Controller
          name="firstname"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <FormInput
              label="Author first name"
              onChange={onChange}
              value={value}
            />
          )}
        />
        {errors.firstname && (
          <ErrorText>Author first name is required</ErrorText>
        )}
        <Controller
          name="lastname"
          control={control}
          rules={{ required: true }}
          render={({ onChange, value }) => (
            <FormInput
              label="Author last name"
              onChange={onChange}
              value={value}
            />
          )}
        />
        {errors.lastname && <ErrorText>Author last name is required</ErrorText>}
        <ButtonContainer>
          <SubmitButton type="submit" />
        </ButtonContainer>
      </Form>
    </BookPage>
  );
};

FormRequest.propTypes = {
  headingText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
  selectedBook: PropTypes.object,
};

export default FormRequest;
