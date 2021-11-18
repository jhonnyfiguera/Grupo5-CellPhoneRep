import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GlobalContext from '../context';
import Login from '../../pages/Login';
import TopTabsNavigator from '../TopTabsNavigator';
import Detalle from '../../pages/Detalle';
import NuevaReserva from '../../pages/NuevaReserva';
import MisReservas from '../../pages/MisReservas';

export default function StackNavigator() {
	const [DataAuth, setDataAuth] = useState({});

	const Stack = createStackNavigator();

	const isAuthenticated = () => DataAuth.email !== undefined;

	return (
		<GlobalContext.Provider value={{ DataAuth, setDataAuth }}>
			{isAuthenticated() ? (
				<Stack.Navigator>
					<Stack.Screen
						name={'TopTabsNavigator'}
						component={TopTabsNavigator}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name={'NuevaReserva'}
						component={NuevaReserva}
						options={{ title: 'Mis reservas' }}
					/>
					<Stack.Screen
						name={'MisReservas'}
						component={MisReservas}
						options={{ title: 'xxxx' }}
					/>
					<Stack.Screen 
						name={'Detalle'} 
						component={Detalle} 
						options={{ title: 'Mis Reservas' }} 
					/>
				</Stack.Navigator>
			) : (
				<Stack.Navigator>
					<Stack.Screen 
						name={'Login'} 
						component={Login} 
						options={{ headerShown: false }} 
					/>
				</Stack.Navigator>
			)}
		</GlobalContext.Provider>
	);
}
