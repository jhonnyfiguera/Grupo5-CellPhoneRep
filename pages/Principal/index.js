import React, { useEffect, useState, useContext } from 'react';
import { ScrollView, Text, View, Button, StatusBar, TextInput, TouchableOpacity} from 'react-native';
import styles from '../../util/styles';

export default function Principal({ navigation }) {
	const [email, setEmail] = useState('');
	const [contrasenia, setContrasenia] = useState('');

	return (
		<ScrollView style={styles.contenedorSignin}>
			<View style={styles.containerIngreso}>
				<View style={styles.principal}>
					<StatusBar style="auto" />

					{/*NECESITO AGREGAR STYLES*/}

					<Text>Pagina Princial...</Text>

					<Text>.</Text>
					<Text>.</Text>
					<Text>.</Text>

					<View style={styles.contenedorRow}>
						<TextInput
							onChangeText={(text) => setEmail(text)}
							value={email}
							placeholder="Ingresa tu usuario"
							keyboardType="email-address"
						/>
					</View>

					<View style={styles.contenedorRow}>
						<TextInput
							secureTextEntry={true}
							onChangeText={(text) => setContrasenia(text)}
							value={contrasenia}
							placeholder="Ingresa tu contraseña"
						/>
					</View>
					
					<TouchableOpacity
						style={styles.containerBoton}
						onPress={() => {
							/* ingresar(), startLoading(); */
						}}
					>
						<View style={styles.boton}>
							<Text style={styles.textoBoton}>Ingresar</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity 
						style={styles.containerBoton} 
						onPress={() => {
							/* ingresar(), startLoading(); */
						}}>
						<View style={styles.boton}>
							<Text style={styles.textoBoton}> Registrarme</Text>
						</View>
					</TouchableOpacity>

					<View>
						<Text> Quienes somos: Aqui podras solicitar una reserva para reparar tu telefono</Text>
					</View>
					<View>
						<Text> Integrantes: Jhonny, Patricia y Daisuke</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}
