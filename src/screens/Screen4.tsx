import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { CustomTextInput } from '../components/CustomInput';
import { CustomButton } from '../components/CustonButton';
import { styles } from '../apptheme/AppTheme';

export const Screen4 = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const verificar = () => {
    if (parseFloat(num1) >= parseFloat(num2)) {
      setResult('Número mayor o iguales');
    } else {
      setResult('Número menor');
    }
  };

  return (
    <View style={styles.button}>
      <CustomTextInput
        placeholder="Número 1"
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric" />
      <CustomTextInput
        placeholder="Número 2"
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric" />
      <CustomButton title=">=" onPress={verificar} />
      <Text style={styles.resultText}>{result}</Text>
    </View>
  );
};


