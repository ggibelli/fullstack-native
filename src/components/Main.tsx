import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import AppBar from './Navigation';
import RepositoryList from './RepositoryList';
import { Route, Switch, Redirect } from 'react-router-native';
import SignIn from './SignIn';
import SingleRepository from './SingleRepository';
import CreateReview from './CreateReview';
import { useAuthUserQuery } from '../generated/graphql';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main: React.FC = () => {
  const { data } = useAuthUserQuery();
  const loggedIn = data?.authorizedUser?.id;

  return (
    <View style={styles.container}>
      <AppBar isLoggedIn={Boolean(loggedIn)} />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/create-review" exact>
          {Boolean(!loggedIn) ? <Redirect to="/signin" /> : <CreateReview />}
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>

        <Route path="/:id" exact>
          <SingleRepository />
        </Route>

        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
