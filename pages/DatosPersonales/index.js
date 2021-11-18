import React, { useState, useContext } from 'react';
import { ScrollView, Text, View, Button, StatusBar, TextInput, Alert } from 'react-native';
import styles from '../../util/styles';
import Globalcontext from '../../components/context';

export default () => {
	const { DataAuth, setDataAuth } = useContext(Globalcontext);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style={'auto'} />

				<Text />
				<Text />
				<Text />
				<Text style={styles.titleCellPhone}>Mis Datos</Text>

				<Text />
				<Text />
				<Text />
				<Text>Nombre y Apellido: {DataAuth.name}</Text>

				<Text />
				<Text />
				<Text />
				<Text>{DataAuth.email}</Text>

				<Text />
				<Text />
				<Text />
				<Text>Telefono: {DataAuth.phone}</Text>

				<Text />
				<Text />
				<Text />
				<Text />

				<Button
					title="Salir"
					onPress={() => {
						setDataAuth({});
					}}
				/>

				<Text style={styles.placeholder}></Text>
				<Text> Actualiza tus datos</Text>
				<Text />

				<TextInput value={name} onChangeText={setName} placeholder="Cambiar Nombre y Apellido" />

				<Text />

				<TextInput value={phone} onChangeText={setPhone} placeholder="Ingresa tu numero" />

				<Text />

				<Button
					title="Guardar cambios"
					onPress={() => {
						setDataAuth({ ...DataAuth, name, phone });
						Alert.alert('Oka', 'Se efectuaron los cambios');
					}}
				/>

				<Text />
			</View>
		</ScrollView>
	);
};
