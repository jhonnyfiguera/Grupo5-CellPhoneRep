import React, { useState, useEffect, useContext } from "react";
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
  Alert,
} from "react-native";
import styles from "../../util/styles";
import GlobalContext from "../../components/context";
import * as Google from "expo-auth-session/providers/google";

//Componente
export default function Login({ navigation }) {
  // Hook propios del componente
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  // Destructuro lo que me envio el Globla Provaider
  const { DataAuth, setDataAuth } = useContext(GlobalContext);
  console.log(
    "111.222.... Siguen Valores iniciales de DataAuth Vacio???" + DataAuth
  );

  //Hoock Google
  const [request, response, promptAsync] = Google.useAuthRequest({
    //Pato expoClientId: 923761599304-fpugfprro1rr9e9hoeucgouhl8ahm6pi.apps.googleusercontent.com
    expoClientId:
      "705375110728-j1tuq48g14hm1ntuinrge9ds5i5n6ugq.apps.googleusercontent.com",
    iosClientId:
      "923761599304-41hkeh1v3umtl2ntm5vht4j8ld9ch2sv.apps.googleusercontent.com",
    androidClientId: "GOOGLE_GUID.apps.googleusercontent.com",
    webClientId: "GOOGLE_GUID.apps.googleusercontent.com",
  });

  /**React.useEffect */
  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;

      const { token } = authentication;
      setDataAuth({ ...DataAuth, token });

      //  API google para traerme info del usuario
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`
      )
        .then((res) => res.json())
        .then((data) => {
          const { name, email } = data;
          setDataAuth({ ...DataAuth, name, email });
        });
    }
  }, [response]);

  const validateEmail = (email) => {
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))/;
    return re.test(password);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <br></br>

        <Text style={styles.titleCellPhone}>Bienvenid@ a CellPhone </Text>
        <Text>Servicio de reparacion de celulares...</Text>

        <br></br>
        <br></br>
        <br></br>

        <TextInput
          value={inputEmail}
          onChangeText={setInputEmail}
          placeholder="Ingresar email"
        />

        <TextInput
          value={inputPassword}
          onChangeText={setInputPassword}
          placeholder="Ingresar password"
        />

		<br></br>
        <Button
          title="Ingresar"
          onPress={() => {
            if (!validateEmail(inputEmail)) {
              Alert.alert("Debes ingresar mail valido");
            } else if (!validatePassword(inputPassword)) {
              Alert.alert("Debes ingresar una password valida");
            } else {
              setDataAuth({
                ...DataAuth,
                email: inputEmail,
                password: inputPassword,
              });
            }
          }}
        />

        <br></br>

        <Button
          title="Registrar"
          onPress={() => {
            if (!validateEmail(inputEmail)) {
              Alert.alert('Debes ingresar mail valido');
            } else if (!validatePassword(inputPassword)) {
              Alert.alert("Debes ingresar una password valida");
            } else {
              setDataAuth({
                ...DataAuth,
                email: inputEmail,
                password: inputPassword,
              });
            }
          }}
        />

        <Text>Para ingresar o registrarse con google</Text>

        <br></br>

        <TouchableOpacity
          disabled={!request}
          activeOpacity={0.5}
          onPress={() => {
            promptAsync();
          }}
        >
          <Image
            source={require("../../assets/continuarConGoogle.png")}
            style={styles.LoginGoogle}
          />
        </TouchableOpacity>

        <br></br>
        <br></br>
        <br></br>

        <Text>Jhonny Figuera</Text>
        <Text>Daisuke Miyashiro</Text>
        <Text>Patricia Rodriguez</Text>
      </View>
    </ScrollView>
  );
}
