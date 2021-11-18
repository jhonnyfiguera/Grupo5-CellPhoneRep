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
				<Text>Nombre completo: {DataAuth.name}</Text>

				<Text />
				<Text />
				<Text>Email: {DataAuth.email}</Text>

				<Text />
				<Text />
				<Text>Teléfono: {DataAuth.phone}</Text>

				<Text style={styles.placeholder}></Text>
				<Text style={styles.titleSecondary}> Actualiza tus datos</Text>
				<Text />

				<TextInput value={name} onChangeText={setName} placeholder="Nombre completo" />

				<Text />

				<TextInput value={phone} onChangeText={setPhone} placeholder="Teléfono" />

				<Text />

				<Button
					title="Guardar cambios"
					onPress={() => {
						setDataAuth({ ...DataAuth, name, phone });
						setName('');
						setPhone('');
						Alert.alert('Oka', 'Se efectuaron los cambios');
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
