import * as React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import SigninForm from './SigninForm';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const SignIn: React.FC = () => {
  const onSubmit = (values: { username: string; password: string }) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SigninForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
