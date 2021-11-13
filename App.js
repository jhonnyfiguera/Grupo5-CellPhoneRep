import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Home from './pages/Home';
import TopTabsNavigator from './components/TopTabsNavigator';
import * as Google from 'expo-auth-session/providers/google';

export default function App() {
	const Stack = createStackNavigator();
	return (
		 <NavigationContainer>
			<Stack.Navigator initialRouteName={'Login'}>
				<Stack.Screen name={'Login'} component={Login} options={{headerShown: false}}/>
				<Stack.Screen name={'TopTabsNavigator'} component={TopTabsNavigator} options={{headerShown: false}} />
			</Stack.Navigator>
		</NavigationContainer>
	
	);
}
