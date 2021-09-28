import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SignUpForm from './SignUpForm';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Min length 1 character')
    .max(30, 'Max length is 30 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Min length 5 characters')
    .max(50, 'Max length is 50 characters')
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

const SignUpContainer: React.FC<{
  handleSubmit: (values: { username: string; password: string }) => Promise<void>;
}> = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpContainer;
