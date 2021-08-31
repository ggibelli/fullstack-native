import React from 'react';
import {
  TextInput as NativeTextInput,
  StyleSheet,
  TextStyle,
  StyleProp,
  TextInputProps as NativeTextInputProps,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    padding: 10,
    margin: 10,
  },
});

export interface TextInputProps extends NativeTextInputProps {
  style?: StyleProp<TextStyle>;
  error?: string | false | undefined;
}

const TextInput: React.FC<TextInputProps> = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
