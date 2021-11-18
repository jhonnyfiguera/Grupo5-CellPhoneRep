import React, { useState, useContext } from 'react';
import { ScrollView, Text, View, Button, StatusBar, TextInput, Alert } from 'react-native';
import styles from '../../util/styles';
import Globalcontext from '../../components/context';

export default () => {
	const { DataAuth, setDataAuth } = useContext(Globalcontext);
	const [name, setName] = useState(DataAuth.name);
	const [phone, setPhone] = useState(DataAuth.phone);

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
				{DataAuth.name !== undefined ? (
					<Text>{DataAuth.name}</Text>
				) : (
					<TextInput 
            value={name} 
            onChangeText={setName} 
            placeholder="Ingresar Nombre y Apellido" />
				)}

				<Text />
				<Text />
				<Text />
				<Text>{DataAuth.email}</Text>

				<Text />
				<Text />
				<Text />
				{DataAuth.phone !== undefined ? (
					<Text>{DataAuth.phone}</Text>
				) : (
					<TextInput 
            value={phone} 
            onChangeText={setPhone} 
            placeholder="Ingresa tu numero" />
				)}

				<Text />
				<Button
					title="Guardar cambios"
					onPress={() => {
						setDataAuth({ ...DataAuth, name, phone });
						Alert.alert('Oka', 'Se efectuaron los cambios');
					}}
				/>

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
