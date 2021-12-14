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
          title: "Sucursales",
          tabBarLabel: "Sucursales",
          tabBarIcon: ({ black }) => (
            <MaterialCommunityIcons name="home-group" color={black} size={35} />
          ),
        }}
      />

      <Tabs.Screen
        name={"Datos Personales"}
        component={DatosPersonales}
        options={{
          title: "Cuenta",
          tabBarLabel: "Cuenta",
          tabBarIcon: ({ black }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={black}
              size={35}
            />
          ),
        }}
      />
      <Tabs.Screen
        name={"Mis Reservas"}
        component={MisReservas}
        options={{
          title: "Mis Reservas",
          tabBarLabel: "Reservas",
          tabBarIcon: ({ black }) => (
            <MaterialCommunityIcons
              name="cellphone-cog"
              color={black}
              size={35}
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
          tabBarIcon: ({ black }) => (
            <MaterialCommunityIcons name="logout" color={black} size={35} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
