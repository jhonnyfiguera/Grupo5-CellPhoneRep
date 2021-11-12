import React, { useEffect, useState } from "react";
import {
  FlatList,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";

import { Constants } from "../../util/constants";
import styles from "../../util/styles";


export default ({ navigation }) => {
  const [vehiculos, setVehiculos] = useState([]);

  const cargarVehiculos = () => {
    fetch(`${Constants.BASE_URL}/read`)
      .then((res) => res.json()) // tratamiento de data para convertirlo en un json
      .then((data) => {
        // console.log(data)

        setVehiculos(data);
      });
  };

  useEffect(() => {
    // tengo que ir a buscar los vehiculos
    cargarVehiculos();
  }, []);

  return (
    <View style={styles.reserva}>
      <StatusBar style={"auto"} />

    
      <Button
        title={"Nueva Reserva"}
        onPress={() => {
          navigation.navigate("NuevaReserva");
        }}
      />

      <FlatList
        data={vehiculos}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { id: item.id })}
            >
              <View style={styles.vehiculo}>
                <Text>
                  {item.marca} - {item.modelo}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
