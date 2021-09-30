import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput, { TextInputProps } from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 10,
    color: '#d73a4a',
    alignSelf: 'stretch',
  },
  item: {
    alignSelf: 'stretch',
  },
  container: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
});

interface Props extends TextInputProps {
  name: string;
}

const FormikTextInput: React.FC<Props> = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.item}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
