import React, { useContext } from 'react';
import { ScrollView, Text, View, Button, StatusBar, TouchableOpacity, Image } from 'react-native';
import styles from '../../util/styles';
import GlobalContext from '../../components/context';

export default function Home() {
	const { DataAuth, setDataAuth } = useContext(GlobalContext);

	return (
		<ScrollView>
			<View style={styles.container}>
				<StatusBar style="auto" />

				<Text />
				<Text />
				<Text />
				<Text>Bienvenidxs {DataAuth.name}</Text>

				<Text />
				<Text />
				<Text />

				<Text>Sucursal Colonia</Text>
				<Text />
				<TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
					<Image source={require('../../assets/phoneCuatro.png')} style={styles.ImageHome} />
				</TouchableOpacity>

				<Text />
				<Text />
				<Text />

				<Text>Ssucursal Mercedes</Text>
				<Text />
				<TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
					<Image source={require('../../assets/phoneTres.png')} style={styles.ImageHome} />
				</TouchableOpacity>

				<Text />
				<Text />
				<Text />

				<Text>Sucursal Fray Bentos</Text>
				<Text />
				<TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
					<Image source={require('../../assets/phoneDos.png')} style={styles.ImageHome} />
				</TouchableOpacity>

				<Text />
				<Text />
				<Text />
				<Text>Sucursal Montevideo</Text>
				<Text />
				<TouchableOpacity activeOpacity={0.5} onPress={() => {}}>
					<Image source={require('../../assets/phoneUno.png')} style={styles.ImageHome} />
				</TouchableOpacity>

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
}
