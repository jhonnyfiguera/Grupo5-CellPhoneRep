import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from '../../components/styles';

export default function menuCliente(){
    return (
        <View style={styles.pruebaCliente}>
          <Text>Tercera prueba Choco y Pato</Text>
          <StatusBar style="auto" />
        </View>
      );
};
