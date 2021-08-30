import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';
// import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.white,
    padding: 10,
    // ...
  },
  container: {
    padding: 20,
  },
});

const AppBarTab: React.FC<{ text: string; link: string }> = ({ text, link }) => {
  return (
    <Link to={link}>
      <Text style={styles.text} fontSize="subHeading" fontWeight="bold">
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
