import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import SidebarContentContainer from './containers/SidebarContentContainer';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CalendarScreen from './screens/CalendarScreen';
import SettingsScreen from './screens/SettingsScreen';

export default DrawerNavigator(
	{
		Home: {
		  screen: HomeScreen,
		},
		Profile: {
		  screen: ProfileScreen,
		},
		Calendar: {
		  screen: CalendarScreen,
		},
		Settings: {
		  screen: SettingsScreen,
		},
	},
	{
		contentComponent: SidebarContentContainer,
	}
);
