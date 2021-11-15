import React, { useState, useContext } from 'react';
import { ScrollView, Text, View, Button, StatusBar, TextInput } from 'react-native';
import styles from '../../util/styles';
import Globalcontext from '../../components/context';

export default ({ navigation }) => {
	const { DataAuth, setDataAuth } = useContext(Globalcontext);
	const [name, setName] = useState(DataAuth.name);
	const [email, setEmail] = useState(DataAuth.email);
	const [phone, setPhone] = useState(DataAuth.phone);

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style={'auto'} />

				<Text></Text>
				<Text style={styles.titleCellPhone}>Datos personales en CellPhone </Text>

				<Text></Text>
				<Text></Text>
				<Text>Nombre y Apellido: {name}</Text>

				<Text></Text>
				<Text></Text>
				<Text>Email: {email}</Text>

				<Text></Text>
				<Text></Text>
				{phone !== undefined ? (
					<Text>Teléfono: {phone}</Text>
				) : (
					<Text>Teléfono: Te invitamos a registrar tu telefono</Text>
				)}

				<Text></Text>
				<Text></Text>
				<Text style={styles.titleCellPhone}>Actualiza tus datos </Text>

				<Text></Text>
				<Text></Text>
				<TextInput value={phone} onChangeText={setPhone} placeholder="Ingresa tu teléfono" />

				<Text></Text>
				<Text></Text>
				<Button
					title="Guardar"
					onPress={() => {
						setDataAuth({ ...DataAuth, name, phone });
						alert('Se efectuaron los cambios');
					}}
				/>

				<Text></Text>
				<Text></Text>
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
