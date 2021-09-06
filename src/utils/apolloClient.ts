import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';
import AuthStorage from './authStorage';

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apolloUri,
});

const createApolloClient = (authStorage: AuthStorage) => {
  const authlink = setContext(async (_, { headers }: { headers: Headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authlink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
