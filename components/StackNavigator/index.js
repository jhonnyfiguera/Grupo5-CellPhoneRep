import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


export default function StackNavigator() {

    // const [state, setstate] = useState(initialState)
    const Stack = createStackNavigator()
  
    return (
        <Stack.Navigator initialRouteName={'Vehiculos'}>
            {/* {
                (state) ?
                <Stack.Screen name={'AppPrincipal'} component={AppPrincipal}/>      
                :
                <Stack.Screen name={'StackAuth'} component={AuthenticationStack}/>      
            } */}
          <Stack.Screen name={'Dashboard'} component={Home}/>
          <Stack.Screen name={'Details'} component={Details}/>          
          <Stack.Screen name={'Vehiculos'} component={Vehiculos} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
  }