import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DatosPersonales from "../../pages/DatosPersonales";
import MisReservas from "../../pages/MisReservas";
import Home from "../../pages/Home";
import Salir from "../Salir";

export default function BottomTabsNavigator() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator options={{ headerShown: false }}>
      <Tabs.Screen
        name={"Home"}
        component={Home}
        options={{
          title: "",
          tabBarLabel: "Sucursales",
          tabBarIcon: ({ black, size }) => (
            <MaterialCommunityIcons
              name="home-group"
              color={black}
              size={size}
            />
          ),
        }}
      />

      <Tabs.Screen
        name={"Datos Personales"}
        component={DatosPersonales}
        options={{
          title: "",
          tabBarLabel: "Mis Datos",
          tabBarIcon: ({ black, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={black}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"Mis Reservas"}
        component={MisReservas}
        options={{
          title: "",
          tabBarLabel: "Mis Reservas",
          tabBarIcon: ({ black, size }) => (
            <MaterialCommunityIcons
              name="cellphone-cog"
              color={black}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"Salir"}
        component={Salir}
        options={{
          title: "",
          tabBarLabel: "Salir",
          tabBarIcon: ({ black, size }) => (
            <MaterialCommunityIcons
              name="arrow-left-bold-box-outline"
              color={black}
              size={size}
            />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
