import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import GlobalContext from "../context";
import LoginGoogle from "../../pages/LoginGoogle";
import BottomTabsNavigator from "../BottomTabsNavigator";
import NuevaReserva from "../../pages/NuevaReserva";
import MisReservas from "../../pages/MisReservas";

export default function StackNavigator() {
  const [DataAuth, setDataAuth] = useState({});

  const Stack = createStackNavigator();

  const isAuthenticated = () =>
    DataAuth.email !== undefined && DataAuth.token !== undefined;

  return (
    <GlobalContext.Provider value={{ DataAuth, setDataAuth }}>
      {isAuthenticated() ? (
        <Stack.Navigator>
          <Stack.Screen
            name={"BottomTabsNavigator"}
            component={BottomTabsNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={"NuevaReserva"}
            component={NuevaReserva}
            options={{ title: "" }}
          />
          <Stack.Screen
            name={"MisReservas"}
            component={MisReservas}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name={"LoginGoogle"}
            component={LoginGoogle}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </GlobalContext.Provider>
  );
}
