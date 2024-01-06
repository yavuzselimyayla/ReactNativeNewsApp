import React from "react";
import {
	StyleSheet,
	View,
	Text,
	Image,
	SafeAreaView,
	TextInput,
} from "react-native";
import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from "./app/screens/SearchScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={{
				tabBarActiveTintColor: "red",
			}}>
				<Tab.Screen name="Ana Menü" component={HomeScreen} options={{
					tabBarIcon: () => <Entypo name="home" size={24} color="black" />
				}} />
				<Tab.Screen name="Arama" component={SearchScreen} options={{
					tabBarIcon: () => <FontAwesome name="search" size={24} color="black" />
				}} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}


export default App;
