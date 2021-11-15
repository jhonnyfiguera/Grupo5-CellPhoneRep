import React, { useContext } from 'react';
import { ScrollView, Text, View, Button, StatusBar, TouchableOpacity, Image } from 'react-native';
import styles from '../../util/styles';
import GlobalContext from '../../components/context';

export default function Home({ navigation }) {
	const { DataAuth, setDataAuth } = useContext(GlobalContext);

	return (
		<ScrollView>

			<View style={styles.container}>
				
				<StatusBar style="auto" />

				<Text></Text>
				<Text></Text>
				<Text>Bienvenido : {DataAuth.name}</Text>

				<Text></Text>
				<Text></Text>

				<Text>Imagen de sucursal Colonia</Text>
				<TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
					<Image
						source={require('../../assets/phoneCuatro.png')}
						style={styles.LoginGoogle}
					/>
				</TouchableOpacity>

				<Text></Text>
				<Text></Text>

				<Text>Imagen de sucursal Mercedes</Text>
				<TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
					<Image
						source={require('../../assets/phoneTres.png')}
						style={styles.LoginGoogle}
					/>
				</TouchableOpacity>

				<Text></Text>
				<Text></Text>
				<Text>Imagen de sucursal Fray Bentos</Text>
				<TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
					<Image
						source={require('../../assets/phoneDos.png')}
						style={styles.LoginGoogle}
					/>
				</TouchableOpacity>

				<Text></Text>
				<Text></Text>
				<Text>Imagen de sucursal Montevideo</Text>
				<TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
					<Image
						source={require('../../assets/phoneUno.png')}
						style={styles.LoginGoogle}
					/>
				</TouchableOpacity>

				<Text></Text>
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
}
