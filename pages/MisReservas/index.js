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

	//http://localhost:3000/api/reservations/

	const cargarReservas = () => {
		//fetch(`${Constants.BASE_URL}/read`)
		fetch('http://localhost:3000/api/reservations/')
			.then((res) => res.json())
			.then((data) => {
				setReservas(data);
			});
	};

	useEffect(() => {
		cargarReservas();
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style={'auto'} />

				<Text />
				<Text />
				<Text />
				<Button
					title={'Nueva Reserva'}
					onPress={() => {
						navigation.navigate('NuevaReserva');
					}}
				/>

				<Text />
				<Text />
				<Text />

				<Button
					title="Salir"
					onPress={() => {
						setDataAuth({});
					}}
				/>
				<Text />
				<Text />
				<Text />

				<FlatList
					data={reservas}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity 
								onPress={() => navigation.navigate('Detalle', { id: item.id })}>
								<View>
									<Text>
										{/* {item.marca} - {item.modelo} */}
										{item.tipoCelular} - {item.tipoReparacion}
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
