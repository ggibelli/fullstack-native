import * as React from 'react';
import FormikTextInput from '../FormikTextInput';
import { View, Pressable, StyleSheet } from 'react-native';
import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    alignSelf: 'stretch',
  },
  text: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
    textAlign: 'center',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  pressable: {},
});
const SignUpForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput testID="user" style={styles.item} name="username" placeholder="Username" />
      <FormikTextInput
        testID="password"
        style={styles.item}
        secureTextEntry
        name="password"
        placeholder="Password"
      />
      <FormikTextInput
        testID="password-confirmation"
        style={styles.item}
        secureTextEntry
        name="passwordConfirmation"
        placeholder="Password confirmation"
      />
      <Pressable testID="submit" style={styles.item} onPress={onSubmit}>
        <Text style={styles.text}>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;
