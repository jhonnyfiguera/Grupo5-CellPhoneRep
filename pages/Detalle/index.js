import React, { useEffect, useState, useContext} from 'react';
import {ScrollView,Text,View,Button,StatusBar,} from 'react-native';
import styles from '../../util/styles';
import GlobalContext from '../../components/context';
import { Constants } from '../../util/constants';

export default ({ navigation, route }) => {

	const { id } = route.params || { id: '' };
	const [reserva, setReserva] = useState([]);
	const { DataAuth, setDataAuth } = useContext(GlobalContext);

	const getReserva = (id) => {
		fetch(`${Constants.BASE_URL}/read/${id}`) //Tener en cuenta que pido un ID
			.then((res) => res.json())
			.then((data) => {
				setReserva(data);
			});
	};

	useEffect(() => {
		getReserva(id);
	}, []);

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style={'auto'} />

				<Text />
				<Text />
				<Text />
				<Text style={styles.titleCellPhone}>Eestado de la Reserva: {reserva.marca}</Text> {/* Estado */}

				<Text />
				<Text />
				<Text />
				
				<Text>Detalle de la Reserva: </Text>
				<Text />
				<Text />
				<Text />
				{reserva.marca !== undefined ? (
					<View>
						<Text>{reserva.marca}</Text> {/* Tipo Reparacion  */}
						<Text>{reserva.modelo}</Text> {/* Sucursal  */}
						<Text>{reserva.color}</Text> {/* Dia  */}
						<Text>{reserva.puertas}</Text> {/* Otra  */}
					</View>
				) : (
					<View>
						<Text>Loading...</Text>
					</View>
				)}
				
				<Text />
				<Text />
				<Text />

				<Button
					title={'Mis Reservas'}
					onPress={() => {
						navigation.navigate('MisReservas');
					}}
				/>
				<Button
					title="Salir"
					onPress={() => {
						setDataAuth({});
					}}
				/>
			</View>
		</ScrollView>
	);
};
