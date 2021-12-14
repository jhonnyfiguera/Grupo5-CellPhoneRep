import React, { useEffect, useContext } from "react";
import { View, StatusBar, TouchableOpacity, Image } from "react-native";
import GlobalContext from "../../components/context";
import * as Google from "expo-auth-session/providers/google";
import { Constants } from "../../util/constants";
import { StyleSheet } from "react-native";

export default function Login() {
  const { DataAuth, setDataAuth } = useContext(GlobalContext);

  //Headers
  const headers = new Headers({
    Authorization: `Bearer ${DataAuth.token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  //Add y login de usuario
  const agregarUsuario = (mail, name) => {
    fetch(`${Constants.BASE_URL}/users/addUserGoogle`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email: mail, fullName: name }),
    })
      .then((response) => response.json())
      .then((data) => {
        const { user, token } = data;
        setDataAuth({
          name: user.fullName,
          email: user.email,
          userId: user._id,
          token: token,
          phone: user.phone,
          password: user.password,
        });
      })
      .catch((error) => console.error(error));
  };

  //Ingreso con GOOGLE
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "923761599304-72hkb7u0psigramb10rpanouab6e3bi2.apps.googleusercontent.com",
    iosClientId:
      "923761599304-br2np2655l0oqq4r4uujqldoo0oiqv4t.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      //  API google para traerme info del usuario
      fetch(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${authentication.accessToken}`
      )
        .then((res) => res.json())
        .then((data) => {
          const { name, email } = data;
          setDataAuth({ ...DataAuth, name, email });
          agregarUsuario(email, name);
        });
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Image
        source={require("../../assets/logo.png")}
        style={styles.imageLogo}
      />

      <TouchableOpacity
        disabled={!request}
        activeOpacity={0.5}
        onPress={() => {
          promptAsync();
        }}
      >
        <Image
          source={require("../../assets/btnGoogle.png")}
          style={styles.iconoGoogle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.2,
    borderColor: "gray",
    width: 375,
    height: 750,
  },
  imageLogo: {
    resizeMode: "stretch",
    width: 375,
    height: 500,
  },
  iconoGoogle: {
    resizeMode: "stretch",
    width: 200,
    height: 70,
    marginTop: 25,
  },
});
