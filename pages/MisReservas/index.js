import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, FlatList, StatusBar, Text, TouchableOpacity, View, Button,} from 'react-native';
import { Constants } from '../../util/constants';
import styles from '../../util/styles';
import GlobalContext from '../../components/context';

export default ({ navigation }) => {
	const { DataAuth, setDataAuth } = useContext(GlobalContext);
	const [reservas, setReservas] = useState([]);

	const cargarReservas = () => {
		fetch(`${Constants.BASE_URL}/read`)
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

				<Button
					title="Salir"
					onPress={() => {
						setDataAuth({});
					}}
				/>

				<Text />
				<Text />

				<Text> Lista: </Text>

				<Text />

				<FlatList
					data={reservas}
					renderItem={({ item }) => {
						return (
							<TouchableOpacity onPress={() => navigation.navigate('Detalle', { id: item.id })}>
								<View style={styles.listaReserva}>
									<Text>
										 - {item.id}
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
