import * as React from 'react';
import { useHistory } from 'react-router-native';
import { useCreateUserMutation } from '../../generated/graphql';
import useSignIn from '../../hooks/useSignIn';
import SignUpContainer from './SignUpContainer';

const SignUp: React.FC = () => {
  const [signUp, result] = useCreateUserMutation({
    onError: (error) => console.log(error.message),
  });
  const [signIn] = useSignIn();
  const history = useHistory();
  const onSubmit = async (values: { username: string; password: string }) => {
    const { username, password } = values;
    try {
      await signUp({ variables: { user: { username, password } } });
      await signIn({ username, password });

      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return <SignUpContainer handleSubmit={onSubmit} />;
};

export default SignUp;
