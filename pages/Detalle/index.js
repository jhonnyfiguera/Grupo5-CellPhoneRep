import React, { useEffect, useState, useContext} from 'react';
import {ScrollView,Text,View,Button,StatusBar,} from 'react-native';
import styles from '../../util/styles';
import GlobalContext from '../../components/context';
import { Constants } from '../../util/constants';

export default ({ navigation, route }) => {

	//Queda pendiente
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
				<Text style={styles.titleCellPhone}>Estado de la Reserva: Pendiente </Text> {/* {reserva.marca} */}

				<Text />
				<Text />
				<Text />
				
				<Text>Detalle de la Reserva: </Text>
				<Text />
				<Text />
				<Text />
				{reserva.marca !== undefined ? (
					<View>
						<Text>Tipo Reparacion: Pantalla</Text> {/* Tipo Reparacion  */}
						<Text>Sucursal Seleccionada: Colonia</Text> {/* Sucursal  */}
						<Text>Fecha: 18/11/2021</Text> {/* Dia  */}
						<Text>Contacto</Text> {/* Otra  */}
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
					title="Cancelar Reserva"
					onPress={() => {
					
					}}
				/>
				
				<Text />
				<Text />

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
