import React from 'react';
import { View } from 'react-native';
import { CustomButton } from '../components/CustonButton';



export const Screen1 = ({ navigation }: { navigation: any }) => {
  return (
    <View>
      <CustomButton title="Imagen 1" onPress={() => navigation.navigate('Screen2')} />
      <CustomButton title="Imagen 2" onPress={() => navigation.navigate('Screen3')} />
      <CustomButton title="Mayor o Igual" onPress={() => navigation.navigate('Screen4')} />
      <CustomButton title="Menor o Igual" onPress={() => navigation.navigate('Screen5')} />
    </View>
  );
};



