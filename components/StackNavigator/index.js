import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../pages/Login';
import Registrarme from '../../pages/Registrarme';

export default function StackNavigator() {

    // const [state, setstate] = useState(initialState)
    const Stack = createStackNavigator()
  
    return (
        <Stack.Navigator initialRouteName={'Login'}>
          <Stack.Screen name={'Login'} component={Login}/>
          <Stack.Screen name={'Registrarme'} component={Registrarme}/>          
        </Stack.Navigator>
    );
  }