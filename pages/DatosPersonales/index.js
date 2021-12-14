import React, { useState, useContext } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-paper";
import Globalcontext from "../../components/context";
import { Constants } from "../../util/constants";
import Icon from "react-native-vector-icons/Octicons";

export default () => {
  const { DataAuth, setDataAuth } = useContext(Globalcontext);
  const [phone, setPhone] = useState("");

  //Headers
  const headers = new Headers({
    Authorization: `Bearer ${DataAuth.token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  //Actualizar Contacto
  const actualizarContacto = () => {
    fetch(`${Constants.BASE_URL}/users/update`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ _id: DataAuth.userId, phone: phone }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };

  return (
    <View style={sDatos.container}>
      <StatusBar style={"auto"} />
      <Text style={sDatos.titlePrincipal}>Mis Datos</Text>

      <View style={sDatos.cardView}>
        <Card style={sDatos.cardDatos}>
          <Card.Content style={sDatos.cardContentDatos}>
            <Text style={sDatos.titleSecundario}>
              <Icon name="person" size={25} color="#f8faf7" />
              {"  "}
              {DataAuth.name}
            </Text>
            <Text style={sDatos.titleSecundario}>
              <Icon name="mail-read" size={25} color="#f8faf7" />
              {"  "}
              {DataAuth.email}
            </Text>
            <Text style={sDatos.titleSecundario}>
              <Icon name="device-mobile" size={25} color="#f8faf7" />
              {"  "}
              {DataAuth.phone}
            </Text>
          </Card.Content>
        </Card>
      </View>

      <Text style={sDatos.linea} />

      <Text style={sDatos.titlePrincipal}> Actualiza Contacto</Text>
      <View style={sDatos.cardView}>
        <Card style={sDatos.card}>
          <Card.Content style={sDatos.cardContent}>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="Teléfono"
              placeholderTextColor="#000000"
            />
          </Card.Content>
        </Card>
      </View>

      <TouchableOpacity
        onPress={() => {
          setDataAuth({ ...DataAuth, phone });
          setPhone("");
          Alert.alert("Contacto actualizado");
          actualizarContacto();
        }}
      >
        <Icon name="cloud-upload" size={50} color="#f8faf7" />
      </TouchableOpacity>
    </View>
  );
};

//Estilos Datos Personales
const sDatos = StyleSheet.create({
  container: {
    backgroundColor: "#393951",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.2,
    borderColor: "gray",
    width: 375,
    height: 750,
  },
  titlePrincipal: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    padding: 5,
    paddingBottom: 10,
  },
  titleSecundario: {
    fontSize: 16,
    color: "#f8faf7",
    padding: 9,
    paddingLeft: 20,
    fontWeight: "bold",
  },
  linea: {
    backgroundColor: "#A2A2A2",
    height: 1,
    width: 320,
    marginTop: 1,
    marginBottom: 20,
  },
  cardView: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
  cardDatos: {
    width: 300,
    height: 170,
    backgroundColor: "gray",
  },
  cardContentDatos: {
    justifyContent: "center",
  },
  card: {
    width: 220,
    height: 5,
    backgroundColor: "#fff",
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
});
