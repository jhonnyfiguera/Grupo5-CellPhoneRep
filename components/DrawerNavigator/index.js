import React from 'react';
import { createDrawerNavigator, useDrawerStatus } from '@react-navigation/drawer';

import MainMenu from "../../pages/MainMenu"; 
import CustomerMenu from "../../pages/CustomerMenu"; 

export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator()
  
    return (
        <Drawer.Navigator>
            <Drawer.Screen name={'Home'} component={MainMenu}/>
            <Drawer.Screen name={'Clientes'} component={CustomerMenu}/>
        </Drawer.Navigator>
    );
};