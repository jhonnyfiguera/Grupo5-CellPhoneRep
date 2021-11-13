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
} from "react-native";
import Globalcontext, { authData } from "../../components/context";

export default ({ navigation }) => {
  /*hooks uno por cada atributo*/
  const { AuthData, setAuthData } = useContext(Globalcontext);
  const [nombre, setNombre] = useState(AuthData.name); //En caso de tenerlos no se la pedimos, llega por parametro
  const [email, setEmail] = useState(AuthData.mail); //No se la pedimos, llega por parametro
  const [telefono, setTelefono] = useState(AuthData.phone); //No se la pedimos, llega por parametro

  return (
    <View style={styles.containerIngreso}>
      <View style={styles.detalle}>
        <StatusBar style={"auto"} />

        <Text>Datos personales</Text>

        <View>
          <Text>Nombre y Apellido: {nombre}</Text>
        </View>

        <View>
          <Text>Email: {email}</Text>
        </View>

        <View>
          {telefono !== undefined ? (
            <View>
              <Text>Teléfono: {telefono}</Text>
            </View>
          ) : (
            <View>
              <TextInput
                value={telefono}
                onChangeText={setTelefono}
                placeholder="Ingresa tu teléfono"
              />
            </View>
          )}
        </View>

        <TouchableOpacity
          style={styles.containerBoton}
          onPress={() => {
            setAuthData({...AuthData, telefono})
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
