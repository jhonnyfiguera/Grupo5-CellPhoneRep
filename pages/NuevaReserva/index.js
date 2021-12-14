import React, { useEffect, useState, useContext } from "react";
import {
  StatusBar,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { ScrollView } from "react-native-gesture-handler";
import Globalcontext from "../../components/context";
import { Constants } from "../../util/constants";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/Octicons";

export default function NuevaReserva({ navigation }) {
  const { DataAuth } = useContext(Globalcontext);
  const [celulares, setCelulares] = useState([]);
  const [reparaciones, setReparaciones] = useState([]);
  const [sucursales, setSucursales] = useState([]);
  const isAuthenticated = DataAuth.token !== "";

  const [inputCelular, setInputCelular] = useState({});
  const [inputReparar, setInputReparar] = useState({});
  const [inputSucursal, setInputSucursal] = useState({});
  const [inputFecha, setInputFecha] = useState("");
  const [inputComentario, setInputComentario] = useState("");

  //Headers
  const headers = new Headers({
    Authorization: `Bearer ${DataAuth.token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  //Obtener los celulares
  const cargarCelulares = () => {
    fetch(`${Constants.BASE_URL}/cellPhones`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => setCelulares(data))
      .catch((error) => console.error(error));
  };

  //Obtener los reparaciones
  const cargarReparaciones = () => {
    fetch(`${Constants.BASE_URL}/repairs`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => setReparaciones(data))
      .catch((error) => console.error(error));
  };

  //Obtener los sucursales
  const cargarSucursales = () => {
    fetch(`${Constants.BASE_URL}/offices`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => setSucursales(data))
      .catch((error) => console.error(error));
  };

  if (isAuthenticated) {
    useEffect(() => {
      cargarCelulares();
    }, []);
    useEffect(() => {
      cargarReparaciones();
    }, []);
    useEffect(() => {
      cargarSucursales();
    }, []);
  }

  //Add nueva reserva
  const agregarReserva = () => {
    let cel = celulares.find((c) => c.name === inputCelular);
    let reparacion = [reparaciones.find((r) => r.name === inputReparar)];
    let suc = sucursales.find((s) => s.name === inputSucursal);
    let userId = {
      _id: DataAuth.userId,
    };

    fetch(`${Constants.BASE_URL}/reservations/add`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        phone: cel,
        itemsRepairs: reparacion,
        office: suc,
        date: inputFecha,
        additionalComment: inputComentario,
        user: userId,
      }),
    })
      .then((response) => response.json())
      .catch((error) => alert(error.message));
  };

  return (
    <ScrollView>
      <StatusBar style={"auto"} />
      {/*Pickers para selección */}
      <View style={sNuevaR.containerPicker}>
        <View style={sNuevaR.cardPicker}>
          <Picker
            style={sNuevaR.itemPicker}
            selectedValue={inputSucursal}
            onValueChange={(itemValue) => setInputSucursal(itemValue)}
          >
            <Picker.Item label="Seleccionar Sucursal" color="#393951" />
            {sucursales.map((item, key) => (
              <Picker.Item
                height={false}
                label={item.name}
                value={item.name}
                key={key}
                color="#393951"
              />
            ))}
          </Picker>
        </View>
        <View style={sNuevaR.cardPicker}>
          <Picker
            style={sNuevaR.itemPicker}
            selectedValue={inputCelular}
            onValueChange={(itemValue) => setInputCelular(itemValue)}
          >
            <Picker.Item label="Seleccionar Celular" color="#393951" />
            {celulares.map((item, key) => (
              <Picker.Item
                height={false}
                label={item.name}
                value={item.name}
                key={key}
                color="#393951"
              />
            ))}
          </Picker>
        </View>
        <View style={sNuevaR.cardPicker}>
          <Picker
            style={sNuevaR.itemPicker}
            selectedValue={inputReparar}
            onValueChange={(itemValue) => setInputReparar(itemValue)}
          >
            <Picker.Item label="Seleccionar Reparación" color="#393951" />
            {reparaciones.map((item, key) => (
              <Picker.Item
                height={false}
                label={item.name}
                value={item.name}
                key={key}
                color="#393951"
              />
            ))}
          </Picker>
        </View>
      </View>
      {/*Carss para ingresar y botón*/}
      <View style={sNuevaR.container}>
        <View style={sNuevaR.cardView}>
          <Card style={sNuevaR.card}>
            <Card.Content style={sNuevaR.cardContent}>
              <TextInput
                value={inputFecha}
                onChangeText={setInputFecha}
                placeholder="Ingresar Fecha"
                placeholderTextColor="#000000"
              />
            </Card.Content>
          </Card>
        </View>
        <View style={sNuevaR.cardView}>
          <Card style={sNuevaR.card}>
            <Card.Content style={sNuevaR.cardContent}>
              <TextInput
                value={inputComentario}
                onChangeText={setInputComentario}
                placeholder="Ingresar Comentario"
                placeholderTextColor="#000000"
              />
            </Card.Content>
          </Card>
        </View>
        <TouchableOpacity
          style={sNuevaR.boton}
          onPress={() => {
            if (inputCelular && inputReparar && inputFecha && inputSucursal) {
              agregarReserva();
              Alert.alert(
                "Reserva generada, presiona Back para volver o ingrese nueva reserva"
              );
              setInputCelular({});
              setInputReparar({});
              setInputSucursal({});
              setInputFecha("");
              setInputComentario("");
            } else {
              Alert.alert("Faltan datos");
            }
          }}
        >
          <Icon name="cloud-upload" size={50} color="#f8faf7" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

//Estilos de MisReservas
const sNuevaR = StyleSheet.create({
  containerPicker: {
    backgroundColor: "#393951",
    flex: 1,
    width: 375,
  },
  cardPicker: {
    width: 250,
    height: 45,
    backgroundColor: "#92a1cf",
    justifyContent: "center",
    marginTop: 55,
    marginLeft: 60,
    borderRadius: 8,
  },
  itemPicker: {
    width: 250,
    justifyContent: "center",
  },
  container: {
    backgroundColor: "#393951",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.2,
    borderColor: "gray",
    width: 375,
    height: 320,
  },
  cardView: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 250,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginTop: 40,
  },
  cardContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  boton: {
    marginTop: 40,
  },
});
