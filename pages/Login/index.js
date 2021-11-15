import React, { useState, useEffect, useContext } from 'react';
import {
	ScrollView,
	Text,
	View,
	Button,
	StatusBar,
	TextInput,
	TouchableOpacity,
	Linking,
	Image,
} from 'react-native';
import styles from '../../util/styles';
import GlobalContext from '../../components/context';
import * as Google from 'expo-auth-session/providers/google';

//Componente
export default function Login({ navigation }) {
	// Hook propios del componente
	const [inputEmail, setInputEmail] = useState('');
	const [inputPassword, setInputPassword] = useState('');

	// Destructuro lo que me envio el Globla Provaider
	const { DataAuth, setDataAuth } = useContext(GlobalContext);
	console.log('111.222.... Siguen Valores iniciales de DataAuth Vacio???' + DataAuth);

	//Hoock Google
	const [request, response, promptAsync] = Google.useAuthRequest({
		//Pato expoClientId: 923761599304-fpugfprro1rr9e9hoeucgouhl8ahm6pi.apps.googleusercontent.com
		expoClientId: '705375110728-j1tuq48g14hm1ntuinrge9ds5i5n6ugq.apps.googleusercontent.com',
		iosClientId: '923761599304-41hkeh1v3umtl2ntm5vht4j8ld9ch2sv.apps.googleusercontent.com',
		androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
		webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
	});

	/**React.useEffect */
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

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style="auto" />

				<Text></Text>
				<Text style={styles.titleCellPhone}>Bienvenid@ a CellPhone </Text>
				<Text>Servicio de reparacion de celulares...</Text>

				<Text></Text>
				<Text></Text>
				<Text></Text>

				<TextInput value={inputEmail} onChangeText={setInputEmail} placeholder="Ingresar email" />

				<TextInput
					value={inputPassword}
					onChangeText={setInputPassword}
					placeholder="Ingresar password"
				/>

				<Button
					title="Ingresar"
					onPress={() => {
						setDataAuth({ ...DataAuth, email: inputEmail, password: inputPassword });
					}}
				/>

				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>

				<Button
					title="Registrarme con google"
					onPress={() =>
						Linking.openURL(
							'https://accounts.google.com/signup/v2/webcreateaccount?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=SignUp',
						)
					}
					//Verificar como hacer para volver a la app
				/>

				<Text></Text>

				<TouchableOpacity
					disabled={!request}
					activeOpacity={0.5}
					onPress={() => {
						promptAsync();
					}}
				>
					<Image
						source={require('../../assets/google-signin-button-1024x260.png')}
						style={styles.LoginGoogle}
					/>
				</TouchableOpacity>

				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>
				<Text></Text>

				<Text>Jhonny Figuera</Text>
				<Text>Daisuke Miyashiro</Text>
				<Text>Patricia Rodriguez</Text>
			</View>
		</ScrollView>
	);
}
