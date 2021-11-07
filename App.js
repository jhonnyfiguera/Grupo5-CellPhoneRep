import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import TopButtonNavigatior from './components/TopButtonNavigator';
import StackNavigator from './components/StackNavigatior';
import Drawer from './components/DrawerNavigator';

function Main() {
  return (
    <Drawer drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer name="Menu" component={TopButtonNavigatior} />
      {/*<Drawer name="Prueba" component={StackNavigator} />*/}
    </Drawer>
  );
}

export default function App() {
  return (
    <NavigationContainer>
         <StackNavigator name="Home" component={Main} options={{ headerShown: false }} />
    </NavigationContainer>
  );
};