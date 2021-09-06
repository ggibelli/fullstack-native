import * as React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import LogoutTab from './LogoutTab';

import Text from './Text';
import { useAuthUserQuery } from '../generated/graphql';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    flexDirection: 'row',
    // ...
  },
  item: {
    padding: 10,
  },
  // ...
});

const AppBar = () => {
  const { data } = useAuthUserQuery();
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const handleLogout = () => {
    authStorage?.removeAccessToken();
    client.resetStore();
    console.log('lol');
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />
        {data?.authorizedUser?.id ? (
          <LogoutTab handleLogout={handleLogout} />
        ) : (
          <AppBarTab text="Sign In" link="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
