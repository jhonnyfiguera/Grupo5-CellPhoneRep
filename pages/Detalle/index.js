import React, { useEffect, useState } from 'react';
import {ScrollView,Text,View,Button,StatusBar,TextInput, TouchableOpacity, Linking, Image,} from 'react-native';

import styles from '../../util/styles';

export default ({ navigation, route }) => {
	return (
		<ScrollView>

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
		</ScrollView>
	);
};
