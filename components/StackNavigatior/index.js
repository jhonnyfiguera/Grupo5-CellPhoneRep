import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainMenu from "../../pages/MainMenu"; 
import CustomerMenu from "../../pages/CustomerMenu"; 

export default function StackNavigator() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
         {/* <Stack.Screen name={'Home'} component={MainMenu} options={{headerShown: false}}/>*/}
          <Stack.Screen name={'Cliente'} component={CustomerMenu} />     
          <Stack.Screen name={'Home'} component={MainMenu}/>  
        </Stack.Navigator>
    );
  };