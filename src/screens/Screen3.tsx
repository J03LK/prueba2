import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { styles } from '../apptheme/AppTheme';



export const Screen3 = () => {
    return (
        <View style={styles.button}>
            <Image 
                source={{ uri: 'https://servisoftcorp.com/wp-content/uploads/2018/05/Aplicaciones-M%C3%B3viles-Aplicaciones-M%C3%B3viles.jpg' }} 
                style={styles.image1} 
            />
        </View>
    );
};



