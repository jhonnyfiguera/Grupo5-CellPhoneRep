import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Text, View, Button } from "react-native";

import Login from "../../pages/Login";


export default function DrawerNavigator() {
  const Drawer = createDrawerNavigator();

  return (
    <React.Fragment>
      <Button
        title={"Salir"}
        onPress={() => {
          navigation.navigate("Details", { nombre: nombre });
          /*aqui va una funcion para salir, la misma se define arriba del return*/
        }}
      />
      <Drawer.Navigator initialRouteName={"Login"}>
        <Drawer.Screen name={"Login"} component={Login} />

        {/* {
                (state) ?
                <Stack.Screen name={'AppPrincipal'} component={AppPrincipal}/>      
                :
                <Stack.Screen name={'StackAuth'} component={AuthenticationStack}/>      
            } */}
      </Drawer.Navigator>
    </React.Fragment>
  );
}
