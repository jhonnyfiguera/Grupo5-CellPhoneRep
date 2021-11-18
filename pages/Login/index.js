import React, { useState, useEffect, useContext } from "react";
import {ScrollView, Text, View, Button, StatusBar, TextInput, TouchableOpacity, Image, Alert,} from "react-native";
import styles from "../../util/styles";
import GlobalContext from "../../components/context";
import * as Google from "expo-auth-session/providers/google";

export default function Login() {
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');
	const { DataAuth, setDataAuth } = useContext(GlobalContext);

	const [request, response, promptAsync] = Google.useAuthRequest({
		//Pato expoClientId: 923761599304-fpugfprro1rr9e9hoeucgouhl8ahm6pi.apps.googleusercontent.com
		expoClientId: '705375110728-j1tuq48g14hm1ntuinrge9ds5i5n6ugq.apps.googleusercontent.com',
		iosClientId: '923761599304-41hkeh1v3umtl2ntm5vht4j8ld9ch2sv.apps.googleusercontent.com',
		androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
		webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
	});

	useEffect(() => {
		if (response?.type === 'success') {
			const { authentication } = response;
			const { token } = authentication;
			setDataAuth({ ...DataAuth, token });

			//  API google para traerme info del usuario
			fetch(
				`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`,
			)
				.then((res) => res.json())
				.then((data) => {
					const { name, email } = data;
					setDataAuth({ ...DataAuth, name, email });
				});
		}
	}, [response]);

	const validateEmail = (email) => {
		let re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
		return re.test(email);
	};

	const validatePassword = (password) => {
		let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))/;
		return re.test(password);
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style="auto" />

				<Text />
				<Text />
				<Text />

				<Text style={styles.titleCellPhone}>Bienvenid@ a CellPhone </Text>
				<Text>Servicio de reparacion de celulares...</Text>

				<Text />
				<Text />
				<Text />

				<TextInput
					style={styles.placeholder}
					value={inputEmail}
					onChangeText={setInputEmail}
					placeholder="Ingresar email:     example@gmail.com"
				/>

				<TextInput
					style={styles.placeholder}
					value={inputPassword}
					onChangeText={setInputPassword}
					placeholder="Ingresar Contraseña"
				/>

				{/** Dar estilo en uno al lado del otro Ingresar y Registrar*/}
				<Button
					title="Ingresar"
					onPress={() => {
						if (!validateEmail(inputEmail)) {
							Alert.alert('Error', 'Debes ingresar email valido example@gmail.com');
						} else if (!validatePassword(inputPassword)) {
							Alert.alert('Error', 'Debes ingresar una password valida');
						} else {
							setDataAuth({
								...DataAuth,
								email: inputEmail,
								password: inputPassword,
							});
						}
					}}
				/>

				<Text />
				<Text />

				<Button
					title="Registrar"
					onPress={() => {
						if (!validateEmail(inputEmail)) {
							Alert.alert('Error', 'Debes ingresar email valido example@gmail.com');
						} else if (!validatePassword(inputPassword)) {
							Alert.alert('Error', 'Debes ingresar una password valida');
						} else {
							setDataAuth({
								...DataAuth,
								email: inputEmail,
								password: inputPassword,
							});
						}
					}}
				/>

				<Text />
				<Text />
				<Text />
				<Text />
				<Text />

				<TouchableOpacity
					disabled={!request}
					activeOpacity={0.5}
					onPress={() => {
						promptAsync();
					}}
				>
					<Image
						source={require('../../assets/continuarConGoogle.png')}
						style={styles.LoginGoogle}
					/>
				</TouchableOpacity>

				<Text />
				<Text />
				<Text />
				<Text />
				<Text />

				<Text>Jhonny Figuera</Text>
				<Text>Daisuke Miyashiro</Text>
				<Text>Patricia Rodriguez</Text>
			</View>
		</ScrollView>
	);
}
