import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { styles } from '../apptheme/AppTheme';


interface CustomTextInputProps extends TextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({ placeholder, value, onChangeText, ...props }) => {
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