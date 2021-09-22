import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import SigninForm from './SigninForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignInContainer: React.FC<{
  handleSubmit: (values: { username: string; password: string }) => Promise<void>;
}> = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ handleSubmit }) => <SigninForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignInContainer;
