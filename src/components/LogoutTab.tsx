import * as React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
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

const LogoutTab: React.FC<{ handleLogout: () => void }> = ({ handleLogout }) => {
  return (
    <Pressable onPress={handleLogout}>
      <Text style={styles.text} fontSize="subHeading" fontWeight="bold">
        Logout
      </Text>
    </Pressable>
  );
};

export default LogoutTab;
