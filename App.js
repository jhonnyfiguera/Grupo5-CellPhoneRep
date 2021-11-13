import React, { useEffect, useState, useContext } from "react";
import {
  ScrollView,
  Text,
  View,
  Button,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import Registrarme from "./pages/Registrarme";
import Home from "./pages/Home";
import TopTabsNavigator from "./components/TopTabsNavigator";
import GlobalContext, { authData } from "./components/context";

import StackNavigator from "./components/StackNavigator";

export default function App() {
  
  return (
      <NavigationContainer>
        <StackNavigator></StackNavigator>
      </NavigationContainer>    
  );
}

/*Object {
  "email": "figuerajhonny5@gmail.com",
  "family_name": "Figuera",
  "given_name": "Jhonny",
  "id": "109187894384021618399",
  "locale": "es",
  "name": "Jhonny Figuera",
  "picture": "https://lh3.googleusercontent.com/a-/AOh14GgHMkaN6D3P1qEo7S5bIYzb9T2CvUPTjvrCjai1dkI=s96-c",
  "verified_email": true,
} */
