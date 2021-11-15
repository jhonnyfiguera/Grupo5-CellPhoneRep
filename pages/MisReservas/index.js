import React, { useEffect, useState } from 'react';
import {
	ScrollView,
	FlatList,
	StatusBar,
	Text,
	TouchableOpacity,
	View,
	Button,
} from 'react-native';
import { Constants } from '../../util/constants';
import styles from '../../util/styles';

export default ({ navigation }) => {
	const [reservas, setReservas] = useState([]);

	const cargarReservas = () => {
		fetch(`${Constants.BASE_URL}/read`)
			.then((res) => res.json()) // tratamiento de data para convertirlo en un json
			.then((data) => {
				setReservas(data);
			});
	};

	useEffect(() => {
		// tengo que ir a buscar los vehiculos
		cargarReservas();
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style={'auto'} />

				<Text></Text>
				<Text></Text>
				<Button
					title={'Nueva Reserva'}
					onPress={() => {
						navigation.navigate('NuevaReserva');
					}}
				/>

				<Text></Text>

				<Button
					title="Salir"
					onPress={() => {
						setDataAuth({});
					}}
				/>

				<Text></Text>
				<Text></Text>

				<FlatList
					data={reservas}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity onPress={() => navigation.navigate('Detalle', { id: item.id })}>
								<View>
									<Text>
										{item.marca} - {item.modelo}
									</Text>
								</View>
							</TouchableOpacity>
						);
					}}
				/>
			</View>
		</ScrollView>
	);
};
