import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Principal from '../../pages/Principal';
import Detalle from '../../pages/Detalle';
import Reservas from '../../pages/Reservas';


export default function DrawerNavigator() {
	
	const Drawer = createDrawerNavigator();

	return (
		<Drawer.Navigator initialRouteName={'Principal'}>
			<Drawer.Screen name={'Principal'} component={Principal} />
			<Drawer.Screen name={'Detalle'} component={Detalle} />
			<Drawer.Screen name={'Reservas'} component={Reservas} />
			{/* {
                (state) ?
                <Stack.Screen name={'AppPrincipal'} component={AppPrincipal}/>      
                :
                <Stack.Screen name={'StackAuth'} component={AuthenticationStack}/>      
            } */}
		</Drawer.Navigator>
	);
}