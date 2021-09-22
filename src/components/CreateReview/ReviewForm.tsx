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
const ReviewForm: React.FC<{ onSubmit: () => void }> = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        testID="owner"
        style={styles.item}
        name="ownerName"
        placeholder="Repository owner name"
      />
      <FormikTextInput
        testID="repository"
        style={styles.item}
        name="repositoryName"
        placeholder="Repository  name"
      />
      <FormikTextInput
        testID="rating"
        style={styles.item}
        name="rating"
        keyboardType="numeric"
        placeholder="Rating between 0 and 100"
      />
      <FormikTextInput
        testID="review"
        multiline
        style={styles.item}
        name="text"
        placeholder="Review"
      />

      <Pressable testID="submit" style={styles.item} onPress={onSubmit}>
        <Text style={styles.text}>Create a review</Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;
