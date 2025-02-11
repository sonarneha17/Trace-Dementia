import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from
	"react-navigation-material-bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import PatientScreen from "./screens/PatientScreen";
import ViewScoreScreen from "./screens/ViewScoreScreen";
import TestScreen from "./screens/TestScreen";

const TabNavigator = createMaterialBottomTabNavigator(
{
	Home: {
	screen: HomeScreen,
	navigationOptions: {
		tabBarLabel: "Home",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-home"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
	Patient: {
	screen: PatientScreen,
	navigationOptions: {
		tabBarLabel: "Patient",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="md-person-circle-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},

	Test: {
		screen: TestScreen,
		navigationOptions: {
			tabBarLabel: "Take Test",
			tabBarIcon: (tabInfo) => (
			<Ionicons
				name="clipboard-outline"
				size={tabInfo.focused ? 26 : 20}
				color={tabInfo.tintColor}
			/>
			),
		},
		},

	Results: {
	screen: ViewScoreScreen,
	navigationOptions: {
		tabBarLabel: "View Score",
		tabBarIcon: (tabInfo) => (
		<Ionicons
			name="eye-outline"
			size={tabInfo.focused ? 26 : 20}
			color={tabInfo.tintColor}
		/>
		),
	},
	},
},
{
	initialRouteName: "Home",
	barStyle: { backgroundColor: "#8b008b" },
}
);

const Navigator = createAppContainer(TabNavigator);

export default function App() {
return (
	<Navigator>
	<HomeScreen />
	</Navigator>
);
}
