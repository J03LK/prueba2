import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { styles } from '../apptheme/AppTheme';



export const Screen2 = () => {
    return (
        <View style={styles.button}>
            <Image 
                source={{ uri: 'https://isil.pe/blog/wp-content/uploads/2023/05/tipos-de-app-moviles.png' }} 
                style={styles.image1} 
            />
        </View>
    );
};



