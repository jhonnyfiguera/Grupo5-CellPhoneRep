import React, { useEffect, useState, useContext } from 'react';
import {
	ScrollView,
	Text,
	View,
	Button,
	StatusBar,
	TextInput,
	TouchableOpacity,
	Linking,
} from 'react-native';
import styles from '../../util/styles';

export default function Login({ navigation }) {
	const [bienvenido, setBienvenido] = useState('Hoooolllaaaaaaa Bienvenidx...');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={styles.containerIngreso}>
			<View style={styles.principal}>
				<StatusBar style="auto" />

				{/*NECESITO AGREGAR STYLES*/}

				<Text>CellPhone Reparaciones</Text>

				<TextInput
					style={styles.contenedorRow}
					value={email}
					onChangeText={(text) => setEmail(text)}
					placeholder="Ingresa tu mail"
					keyboardType="email-address"
				/>
				<TextInput
					style={styles.contenedorRow}
					value={password}
					secureTextEntry={true}
					onChangeText={(text) => setPassword(text)}
					placeholder="Ingresa tu contraseña"
				/>

				<TouchableOpacity
					style={styles.containerBoton}
					onPress={() => {
						navigation.navigate('TopTabsNavigator', { bienvenido: bienvenido, email:email }); //Ojo le paso el parametro si quiero por la pagina
					}}
				>
					<View style={styles.boton}>
						<Text style={styles.textoBoton}> Ingresar</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.containerBoton}
					onPress={() => {
						/* registrar(), startLoading(); */
					}}
				>
					<View style={styles.boton}>
						<Text style={styles.textoBoton}> Registrarme</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.containerBoton}
					onPress={() => {
						/* registrar(), startLoading(); */
					}}
				>
					<View style={styles.boton}>
						<Text style={styles.textoBoton}> Continuar con Google</Text>
					</View>
				</TouchableOpacity>

				<Text
					style={styles.linkOlvidaste}
					onPress={() => Linking.openURL('https://www.google.com/?gws_rd=ssl')}
				>
					¿Olvidaste tu contraseña?
				</Text>

				<View>
					<Text>En CellPhone ofrecemos un servicio de reparación de celulares</Text>
				</View>
				<View>
					<Text> Integrantes: Jhonny, Patricia y Daisuke</Text>
				</View>
			</View>
		</View>
	);
}
