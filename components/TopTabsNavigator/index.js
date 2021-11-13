import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
	ScrollView,
	Text,
	View,
	Button,
	StatusBar,
	TextInput,
	TouchableOpacity,
	Linking,
  rootParams,
} from 'react-native';

import styles from '../../util/styles';

import DatosPersonales from '../../pages/DatosPersonales';
import MisReservas from '../../pages/MisReservas';



export default function TopTabsNavigator({ navigation, route }) {
	const { bienvenido } = route.params || { bienvenido: '' };
	const Tabs = createMaterialTopTabNavigator();

	return (
		<React.Fragment>
			<View style={styles.containerIngreso}>
      <View style={styles.detalle}>
				<Button
					style={styles.containerBoton}
					title={'Salir'}
					onPress={() => {
						navigation.navigate('Login');
						/*aqui va una funcion para salir, la misma se define arriba del return*/
					}}
				/>

				<View>
					<Text>{bienvenido} </Text>
				</View>
			</View>
      </View>
			<Tabs.Navigator>
				<Tabs.Screen
					name={'DatosPersonales'}
					component={DatosPersonales}
					options={{ title: 'Datos Personales', headerShown: false}}
				/>
				<Tabs.Screen
					name={'MisReservas'}
					component={MisReservas}
					options={{ title: 'Mis Reservas', headerShown: false,  }}
				/>
			</Tabs.Navigator>
		</React.Fragment>
	);
}
