import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts, OpenSansCondensed_300Light } from '@expo-google-fonts/open-sans-condensed'

import Home from './screens/Home/Home'
import Deadlines from './screens/Deadlines/Deadlines'
import Resolutions from './screens/Resolutions/Resolutions'
import Profile from './screens/Profile/Profile'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

const Tabs = createBottomTabNavigator()
const TabsNav = () => {
	return (
		<Tabs.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <FontAwesome name="home" size={24} color="black" />
					},
				}}
			/>

			<Tabs.Screen
				name="Deadlines"
				component={Deadlines}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <FontAwesome name="calendar" size={24} color="black" />
					},
				}}
			/>
			<Tabs.Screen
				name="Resolutions"
				component={Resolutions}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <MaterialCommunityIcons name="sticker-check-outline" size={24} color="black" />
					},
				}}
			/>
			<Tabs.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarIcon: ({ focused, color, size }) => {
						return <Ionicons name="ios-person-outline" size={24} color="black" />
					},
				}}
			/>
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

const App = () => {
	let [fontsLoaded] = useFonts({
		OpenSansCondensed_300Light,
	})

	if (!fontsLoaded) return null

	return (
		<NavigationContainer>
			<StackNav />
		</NavigationContainer>
	)
}

export default App
