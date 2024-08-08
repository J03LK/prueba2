import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { styles } from '../apptheme/AppTheme';

interface Props extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const CustomTextInput = ({placeholder, value, onChangeText, ...props}: Props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};