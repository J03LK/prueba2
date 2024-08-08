import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { styles } from '../apptheme/AppTheme';

interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  ...props
}: CustomTextInputProps) => {
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