import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './screens/Home/Home'
import Deadlines from './screens/Deadlines/Deadlines'
import Resolutions from './screens/Resolutions/Resolutions'
import Profile from './screens/Profile/Profile'

const Tabs = createBottomTabNavigator()
const TabsNav = () => {
	return (
		<Tabs.Navigator screenOptions={{ headerShown: false }}>
			<Tabs.Screen name="Home" component={Home} />
			<Tabs.Screen name="Deadlines" component={Deadlines} />
			<Tabs.Screen name="Resolutions" component={Resolutions} />
			<Tabs.Screen name="Profile" component={Profile} />
		</Tabs.Navigator>
	)
}

const Stack = createNativeStackNavigator()
const StackNav = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Tabs" component={TabsNav} options={{ headerShown: false }} />
			{/* <Stack.Screen name="AddDeadline" component={} /> */}
			{/* <Stack.Screen name="AddResolution" component={} /> */}
		</Stack.Navigator>
	)
}

export default () => {
	return (
		<NavigationContainer>
			<StackNav />
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
