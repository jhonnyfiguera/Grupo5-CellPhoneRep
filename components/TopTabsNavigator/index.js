import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, Button } from "react-native";

import DatosPersonales from "../../pages/DatosPersonales";
import MisReservas from "../../pages/MisReservas";
import Salir from "../../pages/Login";

export default function TopTabsNavigator() {
  const Tabs = createMaterialTopTabNavigator();
  return (
    <React.Fragment>
      <Button
        title={"Salir"}
        onPress={() => {
          navigation.navigate("Details", { nombre: nombre });
          /*aqui va una funcion para salir, la misma se define arriba del return*/
        }}
      />
      <Tabs.Navigator>
        <Tabs.Screen
          name={"DatosPersonales"}
          component={DatosPersonales}
          options={{ title: "Datos Personales", headerShown: false }}
        />
        <Tabs.Screen
          name={"MisReservas"}
          component={MisReservas}
          options={{ title: "Mis Reservas", headerShown: false }}
        />
      </Tabs.Navigator>
      
    </React.Fragment>
  );
}
