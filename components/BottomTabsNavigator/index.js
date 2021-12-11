import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import DatosPersonales from "../../pages/DatosPersonales";
import MisReservas from "../../pages/MisReservas";
import Home from "../../pages/Home";

export default function BottomTabsNavigator() {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name={"Home"}
        component={Home}
        options={{
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
        options={
          {
          tabBarLabel: "Mis Datos",
          tabBarIcon: ({ black, size }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={black}
              size={size}
            />
          )}
      }
      />
      <Tabs.Screen
        name={"MisReservas"}
        component={MisReservas}
        options={{
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
    </Tabs.Navigator>
  );
}
