import React, { useEffect, useState, useContext } from "react";
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
import styles from "../../util/styles";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView style={styles.contenedorSignin}>
      <View style={styles.containerIngreso}>
        <View style={styles.principal}>
          <StatusBar style="auto" />

          {/*NECESITO AGREGAR STYLES*/}

          <Text>CellPhone Reparaciones</Text>

          <View style={styles.contenedorRow}>
            <TextInput
              onChangeText={(text) => setEmail(text)}
              value={email}
              placeholder="Ingresa tu mail"
              keyboardType="email-address"
            />
          </View>

          <View style={styles.contenedorRow}>
            <TextInput
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
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
            onPress={() => Linking.openURL("https://www.google.com/?gws_rd=ssl")}
          >
            ¿Olvidaste tu contraseña?
          </Text>

          <View>
            <Text>
            	En CellPhone ofrecemos un servicio de reparación de celulares
            </Text>
          </View>
          <View>
            <Text> Integrantes: Jhonny, Patricia y Daisuke</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
