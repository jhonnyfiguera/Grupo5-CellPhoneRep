import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function NuevaReserva({ navigation }) {
	const [celular, setCelular] = useState('');
	const [reparacion, setReparacion] = useState('');
	const [fecha, setFecha] = useState(0);
	const [comentario, setComentario] = useState('');
	return (
		<ScrollView>
			<View>
				<Text>Hola pagina nueva reserva queda pendiente </Text>
			</View>
		</ScrollView>
	);
}
