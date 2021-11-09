import React from "react";
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import styles from '../../components/styles';

function menu () {
  return (
      <View style={styles.prueba}>
        <Text>Segunda prueba Choco y Pato</Text>
        <StatusBar style="auto" />
        <View>
          <Text style={styles.pruebaDaisu}>Llego Daisu :)</Text>
        </View>
      </View>
    );
};

export default menu;