import * as React from 'react';
import { useHistory } from 'react-router-native';
import useSignIn from '../../hooks/useSignIn';
import SignInContainer from './SignInContainer';

const SignIn: React.FC = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values: { username: string; password: string }) => {
    const { username, password } = values;

    try {
      await signIn({ username, password });
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignInContainer handleSubmit={onSubmit} />;
};

export default SignIn;
