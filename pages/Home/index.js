import React, { useState, useEffect, useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  StatusBar,
  StyleSheet,
  Image,
} from "react-native";
import GlobalContext from "../../components/context";
import { Constants } from "../../util/constants";
import Icon from "react-native-vector-icons/Octicons";

export default function Home() {
  const { DataAuth, setDataAuth } = useContext(GlobalContext);
  const [sucursales, setSucursales] = useState([]);
  const isAuthenticated = DataAuth.token !== "";

  //Headers
  const headers = new Headers({
    Authorization: `Bearer ${DataAuth.token}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  //Obtener todas las sucursales
  const cargarSucursales = () => {
    fetch(`${Constants.BASE_URL}/offices`, {
      method: "GET",
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setSucursales(data);
        setDataAuth({ ...DataAuth, sucursales: data });
      })
      .catch((error) => console.error(error));
  };

  if (isAuthenticated) {
    useEffect(() => {
      cargarSucursales();
    }, []);
  }

  return (
    <ScrollView>
      <View style={sHome.container}>
        <StatusBar style="auto" />
        <Image
          source={require("../../assets/celReparacion.png")}
          style={sHome.imageLogo}
        />
        {sucursales.length > 0 ? (
          sucursales.map((sucursal) => (
            <View key={sucursal._id} stylesHome="">
              <Text style={sHome.titlePrincipal}>{sucursal.name}</Text>

              <Text style={sHome.titleSecundario}>
                <Icon name="location" size={20} color="#f8faf7" />
                {"  "}
                {sucursal.address}
              </Text>
              <Text style={sHome.titleSecundario}>
                <Icon name="device-mobile" size={20} color="#f8faf7" />
                {"  "}
                {sucursal.phone}
              </Text>
              <Text style={sHome.linea} />
            </View>
          ))
        ) : (
          <Text />
        )}
      </View>
    </ScrollView>
  );
}

//Estilos de Home
const sHome = StyleSheet.create({
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
  },
  titleSecundario: {
    fontSize: 15,
    color: "#f8faf7",
    padding: 9,
    paddingLeft: 20,
  },
  linea: {
    backgroundColor: "#A2A2A2",
    height: 1,
    width: 320,
    marginTop: 1,
    marginBottom: 20,
  },
  imageLogo: {
    marginTop: 2,
    resizeMode: "stretch",
    width: 320,
    height: 200,
  },
});
