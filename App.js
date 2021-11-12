import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator';
import TopTabsNavigator from './components/TopTabsNavigator';

export default function App() {
	return (
		<NavigationContainer>
		
    		 <TopTabsNavigator/> 
		</NavigationContainer>
	);
}

