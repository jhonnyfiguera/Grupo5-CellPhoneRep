import React, { useEffect, useState, useContext } from "react";
import styles from "../../util/styles";
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

/* import React, { useEffect, useState } from 'react'; */

export default ({ navigation, route}) => {
  /*hooks uno por cada atributo*/
  const { bienvenido } = route.params || { bienvenido: '' };
  const [name, setName] = useState(""); //En caso de tenerlos no se la pedimos, llega por parametro
  const [phone, setPhone] = useState(""); //En caso de tenerlos no se la pedimos, llega por parametro
  const [email, setEmail] = useState(""); //No se la pedimos, llega por parametro
 // const [passwordActual, setPasswordActual] = useState(""); //No se la pedimos, llega por parametro
  const [passwordNueva, setPasswordNueva] = useState("");

  return (
    <View style={styles.containerIngreso}>
    <View style={styles.detalle}>
      <StatusBar style={"auto"} />

      <Text>Datos personales</Text>
      <View>
					<Text>aquiiii {bienvenido} </Text>
				</View>

      <View>
        <Text>Email: {email}</Text>
      </View>

      <View>
        {name !== undefined ? (
          <View>
            <Text>Nombre: {name}</Text>
          </View>
        ) : (
          <View>
            <TextInput
              onChangeText={(text) => setName(text)}
              value={name}
              placeholder="Ingresa tu nombre"
            />
          </View>
        )}
      </View>

      <View>
        {phone !== undefined ? (
          <View>
            <Text>Teléfono: {phone}</Text>
          </View>
        ) : (
          <View>
            <TextInput
              onChangeText={(text) => setPhone(text)}
              value={phone}
              placeholder="Ingresa tu teléfono"
            />
          </View>
        )}
      </View>

      <TouchableOpacity
        style={styles.containerBoton}
        onPress={() => {
          /* guardarCambios(), startLoading(); */
        }}
      >
        <View style={styles.boton}>
          <Text style={styles.textoBoton}>Guardar Cambios</Text>
        </View>
      </TouchableOpacity>

      <Text>Cambiar contraseña</Text>

      <View>
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setPasswordNueva(text)}
          value={passwordNueva}
          placeholder="Nueva contraseña"
        />
      </View>

      <TouchableOpacity
        style={styles.containerBoton}
        onPress={() => {
          /* guardarCambios(), startLoading(); */
        }}
      >
        <View style={styles.boton}>
          <Text style={styles.textoBoton}>Guardar Cambios</Text>
        </View>

      </TouchableOpacity>
    </View>
       </View>
  );
};
