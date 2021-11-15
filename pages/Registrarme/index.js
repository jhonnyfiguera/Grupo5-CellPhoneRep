import React, { useState, useEffect, useContext } from 'react';
import {ScrollView,Text,View,Button,StatusBar,TextInput, TouchableOpacity, Linking,} from 'react-native';

//
import GlobalContext from '../../components/context';
import styles from '../../util/styles';

export default function Registrarme({ navigation }) {

	// Hook propios del componente
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const [inputNameAndSurname, setInputNameAndSurname] = useState('');
	const [inputPhone, setInputPhone] = useState();

	//
	const { DataAuth, setDataAuth } = useContext(GlobalContext);

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style="auto" />

				<Text></Text>
				<Text style={styles.titleCellPhone}>Bienvenid@ a CellPhone </Text>
				<Text>Servicio de reparacion de celulares...</Text>

				<Text></Text>
				<Text></Text>

				<TextInput value={inputEmail} onChangeText={setInputEmail} placeholder="Ingresa email" />

				<Text></Text>
				<Text></Text>

				<TextInput
					value={inputPassword}
					onChangeText={setInputPassword}
					placeholder="Ingresa password"
				/>

				<Text></Text>
				<Text></Text>

				<TextInput
					value={inputNameAndSurname}
					onChangeText={setInputNameAndSurname}
					placeholder="Ingresa Nombre y Apellido"
				/>

				<Text></Text>
				<Text></Text>
				<Text></Text>

				<TextInput
					value={inputPhone}
					onChangeText={setInputPhone}
					placeholder="Ingresa Telefono Ej:1126503628"
				/>

				<Text></Text>
				<Text></Text>

				<Button
					title="Registrar"
					onPress={() => {
						setDataAuth({
							...DataAuth,
							email: inputEmail,
							password: inputPassword,
							name: inputNameAndSurname,
							phone: inputPhone,
						});
						navigation.navigate('Home');
					}}
				/>
			</View>
		</ScrollView>
	);
}
