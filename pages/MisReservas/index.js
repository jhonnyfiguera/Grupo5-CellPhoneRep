import React, { useEffect, useState, useContext } from "react";
import {
  ScrollView,
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Button,
  Row,
} from "react-native";
import { Constants } from "../../util/constants";
import styles from "../../util/styles";
import GlobalContext from "../../components/context";

export default ({ navigation }) => {
  const { DataAuth, setDataAuth } = useContext(GlobalContext);
  const [reservas, setReservas] = useState([]);

  let reqOptions = new Headers({
    "Accept": "application/json",
    "Content-Type": "application/json",
  });
  
  const cargarReservas = () => {
    fetch(`${Constants.BASE_URL}/reservations/`, { method: "GET", reqOptions })
      .then((response) => response.json())
      .then((data) => setReservas(data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    cargarReservas();
  },[]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style={"auto"} />

        <Text />
        <Text />
        <Text />
        <Button
          title={"Nueva Reserva"}
          onPress={() => {
            navigation.navigate("NuevaReserva");
          }}
        />

        <Text />

        <Button
          title="Salir"
          onPress={() => {
            setDataAuth({});
          }}
        />

        <Text />
        <Text />

        <Text> Lista: </Text>

        <Text />

        <FlatList
          data={reservas}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("Detalle", { id: item._id })}>
                <View style={styles.listaReserva}>
                  <Text> {item.tipoCelular} - {item.tipoReparacion}  - {item.estado}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
