import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../theme';
import AppBarTab from './AppBarTab';
import LogoutTab from './LogoutTab';
import useAuthStorage from '../../hooks/useAuthStorage';
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

const AppBar: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
  const authStorage = useAuthStorage();
  const client = useApolloClient();

  const handleLogout = () => {
    authStorage?.removeAccessToken();
    client.resetStore();
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" link="/" />
        {isLoggedIn ? (
          <>
            <AppBarTab text="Create Review" link="/create-review" />
            <AppBarTab text="My Reviews" link="/my-reviews" />
            <LogoutTab handleLogout={handleLogout} />
          </>
        ) : (
          <>
            <AppBarTab text="Sign In" link="/signin" />
            <AppBarTab text="Sign Up" link="/signup" />
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
