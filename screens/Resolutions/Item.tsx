import { FlatList, SafeAreaView, StyleSheet, StatusBar, Text, View } from 'react-native'
import { State } from './data'

interface ItemProps {
	state: State
}

export const Item: React.FC<ItemProps> = ({ state }) => {
	var backgroundColor: string = '#ffffff'
	switch (state) {
		case 'unchecked':
			backgroundColor = '#424242'
			break
		case 'failed':
			backgroundColor = '#fc0303'
			break
		case 'succes':
			backgroundColor = '#13fc03'
			break
		case 'partial':
			backgroundColor = '#ffe70d'
			break
		case 'excused':
			backgroundColor = '#00648c'
			break
	}

	return <View style={[styles.item, { backgroundColor }]}></View>
}

const styles = StyleSheet.create({
	item: {
		height: 50,
		// padding: "1%",
		// marginVertical: "5%",
		marginHorizontal: '2%',
		flexGrow: 1,
		flexShrink: 1,
	},
	title: {
		fontSize: 32,
	},
})
