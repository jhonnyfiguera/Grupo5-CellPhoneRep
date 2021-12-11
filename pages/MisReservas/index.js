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
  Alert,
} from "react-native";
import { Constants } from "../../util/constants";
import styles from "../../util/styles";
import GlobalContext from "../../components/context";

export default ({ navigation }) => {
  const { DataAuth, setDataAuth } = useContext(GlobalContext);
  const [reservas, setReservas] = useState([]);
  const isAuthenticated = DataAuth.token !== "";
  const {error, setError} = useState("");

  //Headers
  let headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  //Obtener reservas por usuario
  const cargarReservas = () => {
    fetch(`${Constants.BASE_URL}/reservations/user/${DataAuth.userId}`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setReservas(data);
      })
      //.catch((error) => { setError(error.message) });
       .catch(error => alert(error.message))
  };

  if (isAuthenticated) {
    useEffect(() => {
      cargarReservas();
    }, []);
  }

  //Cancelar Reserva
  const cancelarReserva = (reservaId) => {
    fetch(`${Constants.BASE_URL}/reservations/cancelReservation/`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ _id: reservaId }),
    })
      .then((response) => response.json())
      .catch((error) => console.error(error));
  };


  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style={"auto"} />
        <Text />
        <Button
          title={"Nueva Reserva"}
          onPress={() => {
            navigation.navigate("NuevaReserva");
          }}
        />
        <Text />
        {reservas.length > 0 ? (
          (reservas.sort((a,b) => (a.state < b.state) ? 1: -1)).map((reserva) => (
            <View key={reserva._id}>
              <Text />
              <Text>Fecha: {reserva.date} </Text>
              <Text />
              <Text>Sucursal: {reserva.office.name} </Text>
              <Text />
              <Text>Comentario: {reserva.additionalComment}</Text>
              <Text />
              <Text>Costo estimado: ${reserva.estimatedRepairCost}</Text>
              <Text />
              <Text>
                Reparaciones a realizar del celular: {reserva.phone.name}
              </Text>
              {reserva.itemsRepairs.map((item) => (
                <View key={item._id}>
                  <Text />
                  <Text> * {item.name} </Text>
                </View>
              ))}

              <Text />
              <Text>
                {reserva.state === "Pendiente" ? (
                  <Button
                    title="Cancelar Reserva"
                    onPress={() => {
                    cancelarReserva(reserva._id);
                      Alert.alert("Oka", "Se efectuaron los cambios");
                    }}
                  />
                ) : (
                  <Text />
                )}
              </Text>
            </View>
          ))
        ) : (
          <Text>"No hay nada"  {error}</Text>
        )}
      </View>
      <Text />
      <Button
        title="Salir"
        onPress={() => {
          setDataAuth({});
        }}
      />
    </ScrollView>
  );
};
