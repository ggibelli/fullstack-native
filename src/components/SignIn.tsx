import * as React from 'react';
import { Formik } from 'formik';

import Text from './Text';
import SigninForm from './SigninForm';

const initialValues = {
  username: '',
  password: '',
};

const SignIn: React.FC = () => {
  const onSubmit = (values: { username: string; password: string }) => {
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SigninForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
