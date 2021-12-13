import React, { useEffect, useState, useContext } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Alert,
} from "react-native";
import { Constants } from "../../util/constants";
import GlobalContext from "../../components/context";
import Icon from "react-native-vector-icons/Octicons";

export default ({ navigation }) => {
  const { DataAuth } = useContext(GlobalContext);
  const [reservas, setReservas] = useState([]);
  const isAuthenticated = DataAuth.token !== "";
  const [modifica, setModifica] = useState("");

  //Headers
  const headers = new Headers({
    Authorization: `Bearer ${DataAuth.token}`,
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
      .catch((error) => console.error(error.message));
  };

  if (isAuthenticated) {
    useEffect(() => {
      cargarReservas();
    }, []);
  }

  if (isAuthenticated) {
    useEffect(() => {
      cargarReservas();
      setModifica("");
    }, [modifica]);
  }

  //Revisar
  /*
  if (isAuthenticated) {
    useEffect(() => {
      cargarReservas();
      }, [reservas]);
  }*/

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
      <View style={sReservas.container}>
        <StatusBar style={"auto"} />

        <TouchableOpacity
          style={sReservas.viewNueva}
          title={"Nueva Reserva"}
          onPress={() => {
            navigation.navigate("NuevaReserva");
          }}
        >
          <Icon name="diff-added" size={30} color="#f8faf7" />
        </TouchableOpacity>
        <Text style={sReservas.titlePrincipal}>Mis Reservas</Text>
        {reservas.length > 0 ? (
          reservas
            .sort((a, b) => (a.state < b.state ? 1 : -1))
            .map((reserva) => (
              <View key={reserva._id}>
                <View style={sReservas.viewCancelar}>
                  {reserva.state === "Pendiente" ? (
                    <TouchableOpacity
                      title={"Cancelar Reserva"}
                      onPress={() => {
                        cancelarReserva(reserva._id);
                        setModifica("modifica");
                        Alert.alert("Reserva cancelada");
                      }}
                    >
                      <Icon name="trashcan" size={24} color="#f8faf7" />
                    </TouchableOpacity>
                  ) : (
                    <Text />
                  )}
                </View>

                <Text style={sReservas.titlePendiente}>{reserva.state}</Text>

                <Text style={sReservas.titleSecundario}>
                  <Icon name="calendar" size={20} color="#f8faf7" />
                  {"  "}
                  {reserva.date}
                </Text>

                <Text style={sReservas.titleSecundario}>
                  <Icon name="location" size={20} color="#f8faf7" />
                  {"  "}
                  {reserva.office.name}
                </Text>

                <Text style={sReservas.titleSecundario}>
                  <Icon name="comment-discussion" size={20} color="#f8faf7" />
                  {"  "}
                  {reserva.additionalComment}
                </Text>

                <Text style={sReservas.titleSecundario}>
                  <Icon name="credit-card" size={20} color="#f8faf7" />
                  {"  $"}
                  {reserva.estimatedRepairCost}
                </Text>

                <Text style={sReservas.titleSecundario}>
                  <Icon name="device-mobile" size={20} color="#f8faf7" />
                  {"  "}
                  {reserva.phone.name}
                </Text>

                {reserva.itemsRepairs.map((item) => (
                  <View key={item._id}>
                    <Text style={sReservas.titleSecundario}>
                      <Icon name="tools" size={20} color="#f8faf7" />
                      {"  "}
                      {item.name}
                    </Text>
                  </View>
                ))}

                <Text style={sReservas.linea} />
              </View>
            ))
        ) : (
          <Text>Sin reservas</Text>
        )}
      </View>
    </ScrollView>
  );
};

//Estilos de MisReservas
const sReservas = StyleSheet.create({
  container: {
    backgroundColor: "#393951",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.2,
    borderColor: "gray",
    width: 375,
  },
  titlePrincipal: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    padding: 5,
    paddingBottom: 10,
    paddingTop: 30,
  },
  titleSecundario: {
    fontSize: 15,
    color: "#f8faf7",
    padding: 9,
    paddingLeft: 20,
  },
  titlePendiente: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    padding: 9,
    paddingLeft: 20,
  },
  linea: {
    backgroundColor: "#A2A2A2",
    height: 3,
    width: 320,
    marginTop: 1,
    marginBottom: 20,
  },
  viewCancelar: {
    paddingLeft: 20,
  },
  viewNueva: {
    paddingTop: 20,
  },
});
