import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	principal: {
		flex: 1,
		backgroundColor: '#f0f8ff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	detalle: {
		flex: 1,
		backgroundColor: '#00ffff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	reserva: {
		flex: 1,
		backgroundColor: '#008000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
	},
	vehiculo: {
		padding: 15,
		borderBottomWidth: 1,
		// marginTop: 1
	},
	contenedorRow: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
		marginBottom: 10,
	  },
	  contenedorSignin: {
		paddingTop: 80,
		flex: 1,
	  },
	  containerIngreso: {
		paddingTop: 15,
		marginTop: 30,
	  },
	  containerBoton: {
		alignItems: "center",
		marginTop: 10,
	  },
	  textoBoton: {
		color: "white",
		fontSize: 15,
	  },
	  boton: {
		width: 200,
		height: 40,
		backgroundColor: "#00AAE4",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 10,
		marginBottom: 10,
		borderWidth: 1,
		borderRadius: 10,
	  },
	  link: {
		marginTop: 30,
		fontSize: 18,
		color: "#33A8FF",
		paddingVertical: 5,
	  },
	  linkOlvidaste : {
		color: "blue",
	  },
});

export default styles;
