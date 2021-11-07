import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MainMenu from "../../pages/MainMenu"; 
import CustomerMenu from "../../pages/CustomerMenu"; 

export default function TopButtonNavigator() {
    const Tabs = createMaterialTopTabNavigator()
    return (
        <Tabs.Navigator>
            <Tabs.Screen name={'Principal'} component={MainMenu} options={{ title: 'Home', headerShown: false }}/>
            <Tabs.Screen name={'Cliente'} component={CustomerMenu} options={{ title: 'Cliente', headerShown: false }}/>
        </Tabs.Navigator>
    );
};
