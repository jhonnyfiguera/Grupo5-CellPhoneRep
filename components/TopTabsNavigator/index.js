import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DatosPersonales from '../../pages/DatosPersonales';
import MisReservas from '../../pages/MisReservas';
import Home from '../../pages/Home';

//Componente
export default function TopTabsNavigator() {
	const Tabs = createMaterialTopTabNavigator();

	return (
		<Tabs.Navigator>
			<Tabs.Screen
				name={'Home'}
				component={Home}
				options={{ title: 'Bienvenido', headerShown: false }}
			/>
			<Tabs.Screen
				name={'DatosPersonales'}
				component={DatosPersonales}
				options={{ title: 'Datos Personales', headerShown: false }}
			/>
			<Tabs.Screen
				name={'MisReservas'}
				component={MisReservas}
				options={{ title: 'Mis Reservas', headerShown: false }}
			/>
		</Tabs.Navigator>
	);
}
