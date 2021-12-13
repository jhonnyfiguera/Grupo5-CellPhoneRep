import React, { useEffect, useState, useContext } from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Button,
  Alert,
  Picker,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styles from "../../util/styles";
import Globalcontext from "../../components/context";
import { Constants } from "../../util/constants";


export default function NuevaReserva({ navigation }) {
  const { DataAuth, setDataAuth } = useContext(Globalcontext);
  const [celulares, setCelulares] = useState([]);
  const [reparaciones, setReparaciones] = useState([]);
  const [sucursales, setSucursales] = useState([]);
  const isAuthenticated = DataAuth.token !== "";

  const [inputCelular, setInputCelular] = useState({});
  const [inputReparar, setInputReparar] = useState({});
  const [inputSucursal, setInputSucursal] = useState({});
  const [inputFecha, setInputFecha] = useState("");
  const [inputComentario, setInputComentario] = useState("");
  const [inputUsuario, setInputUsuario] = useState({});

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
      .catch((error) => alert((error.message)));
  };

  return (
    <ScrollView>
      <View>
        <View>
          <Picker
            selectedValue={inputSucursal}
            onValueChange={(itemValue, itemIndex) =>
              setInputSucursal(itemValue)
            }
          >
            <Picker.Item label="Seleccionar sucursal" />
            {sucursales.map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />
            ))}
          </Picker>
        </View>

        <View>
          <Picker
            selectedValue={inputCelular}
            onValueChange={(itemValue, itemIndex) => setInputCelular(itemValue)}
          >
            <Picker.Item label="Seleccionar celular" />
            {celulares.map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />
            ))}
          </Picker>
        </View>

        <View>
          <Picker
            selectedValue={inputReparar}
            onValueChange={(itemValue, itemIndex) => setInputReparar(itemValue)}
          >
            <Picker.Item label="Seleccionar reparación" />
            {reparaciones.map((item, key) => (
              <Picker.Item label={item.name} value={item.name} key={key} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.container}>
        <StatusBar style={"auto"} />

        <TextInput
          value={inputFecha}
          onChangeText={setInputFecha}
          placeholder="Ingresa fecha"
        />
        <Text />
        <Text />

        <TextInput
          value={inputComentario}
          onChangeText={setInputComentario}
          placeholder="Ingresa comentario"
        />
        <Text />
        <Text />

        <Button
          title="Guardar cambios"
          onPress={() => {
            if (inputCelular && inputReparar && inputFecha && inputSucursal) {
              agregarReserva();
              Alert.alert("Reserva generada, presiona Back para volver o ingrese nueva reserva");
              setInputCelular({});
              setInputReparar({});
              setInputSucursal({});
              setInputFecha("");
              setInputComentario("");
            } else {
              Alert.alert("Faltan datos");
            }
          }}
        />
        <Text />
      </View>
    </ScrollView>
  );
}
