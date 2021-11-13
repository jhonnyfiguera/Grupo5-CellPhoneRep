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
import GlobalContext, { authData } from "../../components/context";
import * as Google from "expo-auth-session/providers/google";
import DrawerNavigator from "../../components/DrawerNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function Login({ navigation }) {
  //const [bienvenido, setBienvenido] = useState('Hoooolllaaaaaaa Bienvenidx...');
  //const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');

  const { AuthData, setAuthData } = useContext(GlobalContext);
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "923761599304-fpugfprro1rr9e9hoeucgouhl8ahm6pi.apps.googleusercontent.com",
    iosClientId:
      "923761599304-41hkeh1v3umtl2ntm5vht4j8ld9ch2sv.apps.googleusercontent.com",
    androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      // llamar a la API de google para traerme info del usuario
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`
      )
        .then((res) => res.json())
        .then((data) => {
          const { name, email, token, telefono } = data;
          setAuthData({ ...AuthData, name: name, email: email });
        });
    }
  }, [response]);

  return (
    <GlobalContext.Provider value={authData}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        { !authData.name ? (
          <View>
            <Text>CellPhone Reparaciones</Text>
            <Button
              disabled={!request}
              title="Login"
              onPress={() => {
                promptAsync();
              }}
            />
            <Button
              title="Registrarme"
              onPress={() => {
                navigation.navigate("Registrarme");
              }}
            />
          </View>
        ) : (
            <View><Text>Una vez logueado</Text></View>
        )}
      </View>
    </GlobalContext.Provider>
  );
}
