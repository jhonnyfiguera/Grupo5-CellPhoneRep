import React, { useState, useEffect, useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  Button,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import styles from "../../util/styles";
import GlobalContext from "../../components/context";
import { Constants } from "../../util/constants";

export default function Home() {
  const { DataAuth, setDataAuth } = useContext(GlobalContext);
  const [sucursales, setSucursales] = useState([]);
  const isAuthenticated = DataAuth.token !== "";

  //Obtener todas las sucursales
  let headers = new Headers({
    Authorization: `Bearer ${DataAuth.token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  });

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
      cargarSucursales();
    }, []);
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        {sucursales.length > 0 ? (
          sucursales.map((sucursal) => (
            <View key={sucursal._id} >
			  <Text />
              <Text>{sucursal.name}</Text>
			  <Text />
              <Text>{sucursal.address} </Text>
			  <Text />
              <Text>{sucursal.phone} </Text>
            </View>
          ))
        ) : (
          <Text>"No hay nada" </Text>
        )}

        <Button
          title="Salir"
          onPress={() => {
            setDataAuth({});
          }}
        />
      </View>
    </ScrollView>
  );
}
