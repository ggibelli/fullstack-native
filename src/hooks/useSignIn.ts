import { MutationResult } from '@apollo/client';
import * as React from 'react';
import { AuthorizeMutation, useAuthorizeMutation } from '../generated/graphql';
import useAuthStorage from './useAuthStorage';
import { useApolloClient } from '@apollo/client';

const useSignIn = (): [
  arg0: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => Promise<AuthorizeMutation>,
  arg1: MutationResult<AuthorizeMutation>,
] => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();
  const [authorizeMutation, result] = useAuthorizeMutation({
    onError: (error) => console.log(error),
  });

  const signIn = async ({ username, password }: { username: string; password: string }) => {
    const { data } = await authorizeMutation({
      variables: {
        username,
        password,
      },
    });
    if (data?.authorize?.accessToken) {
      authStorage?.setAccessToken(data.authorize.accessToken);
      client.resetStore();
    } else {
      throw new Error('qualcosa di brutto');
    }
    return data;
    // call the mutate function here with the right arguments
  };

  return [signIn, result];
};

export default useSignIn;
