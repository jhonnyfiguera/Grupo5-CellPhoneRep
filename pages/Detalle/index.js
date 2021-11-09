import React from 'react';
import styles from '../../util/styles';
import { Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
/* import React, { useEffect, useState } from 'react'; */

export default ({ navigation }) => {
	return (
		<View style={styles.detalle}>
			<StatusBar style={'auto'} />

			<Text>Pagina DETALLE...</Text>

			<View>
				<Text>Pagina Detalle...</Text>
			</View>

			<View>
				<Text>Pagina Detalle...</Text>
			</View>

			<View>
				<Text>Pagina Detalle...</Text>
			</View>

			<Button
				title={'Mis Reservas'}
				onPress={() => {
					navigation.navigate('Reservas'); // oJO NO ENVIO PARAMETROS A LA SIGUIENTE PAGINA
				}}
			/>

			<Button
				title={'Reservar'}
				onPress={() => {
					navigation.navigate('ReservasDos'); // oJO NO ENVIO PARAMETROS A LA SIGUIENTE PAGINA
				}}
			/>
		</View>
	);
};
