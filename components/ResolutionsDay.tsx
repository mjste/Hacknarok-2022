import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { useState } from 'react'

export type ResoultionState = 'unchecked' | 'failed' | 'partial' | 'succes' | 'none'

export interface IResolutionsDayProps {
	id: string
	date: string
	resolutions: ResoultionState[]
}

export const ResolutionsHeader = () => {
	return (
		<View style={styles.containerHead}>
			<View style={[styles.dateCont, { borderColor: 'transparent' }]}>
				<Text style={styles.date}></Text>
			</View>
			<View style={styles.tergetContHead}>
				<Feather name="check-square" size={40} color="white" />
			</View>
			<View style={styles.tergetContHead}>
				<FontAwesome5 name="running" size={40} color="white" />
			</View>
			<View style={styles.tergetContHead}>
				<MaterialCommunityIcons name="cigar-off" size={40} color="white" />
			</View>
			{/* <View style={styles.tergetContHead}>
				<FontAwesome name="sun-o" size={40} color="white" />
			</View> */}
			<View style={styles.tergetContHead}>
				<Ionicons name="barbell-outline" size={40} color="white" />
			</View>
		</View>
	)
}

function Resolution({ state }: { state: ResoultionState }) {
	const [innerState, setInnerState] = useState(state)

	const onPress = () => {
		if (innerState === 'failed') return setInnerState('succes')
		if (innerState === 'succes') return setInnerState('partial')
		if (innerState === 'partial') return setInnerState('unchecked')
		if (innerState === 'unchecked') return setInnerState('failed')
	}

	const mapIcon = (innerState: ResoultionState) => {
		if (innerState === 'failed') return <Feather name="x" size={24} color="black" />
		if (innerState === 'succes') return <Feather name="check" size={24} color="black" />
		if (innerState === 'partial') return <Entypo name="dot-single" size={24} color="black" />
		if (innerState === 'unchecked') return <Feather name="minus" size={24} color="black" />
		if (innerState === 'none') return null
	}

	let borderColor = '#eee3'
	let color = '#eee'
	switch (innerState) {
		case 'unchecked':
			borderColor = '#42424222'
			color = '#424242'
			break
		case 'failed':
			borderColor = '#fc030322'
			color = '#fc0303'
			break
		case 'succes':
			borderColor = '#13fc0322'
			color = '#13fc03'
			break
		case 'partial':
			borderColor = '#ffe70d22'
			color = '#ffe70d'
			break
		// case 'partial':
		// 	borderColor = '#00648c22'
		// 	color = '#00648c'
		// 	break
	}

	return (
		<View style={[styles.tergetCont, { borderColor: color, backgroundColor: borderColor }]}>
			<TouchableOpacity onPress={onPress}>
				<Text>{mapIcon(innerState)}</Text>
			</TouchableOpacity>
		</View>
	)
}

export const ResolutionsDay: React.FC<IResolutionsDayProps> = ({ date, resolutions }) => {
	return (
		<View style={styles.container}>
			<View style={styles.dateCont}>
				<Text style={styles.date}>{date}</Text>
			</View>
			{resolutions.map((x, i) => (
				<Resolution state={x} key={i} />
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 25,
		marginVertical: 5,
		flexGrow: 0,
		flexDirection: 'row',
	},

	dateCont: {
		flexGrow: 1,
		borderBottomWidth: 1,
		borderBottomColor: 'black',
		justifyContent: 'flex-end',
		marginRight: 0,
	},
	date: {
		color: 'black',
		fontFamily: 'OpenSansCondensed_300Light',
		fontSize: 25,
	},
	tergetCont: {
		width: '15%',
		margin: 0,
		borderRadius: 100,
		marginHorizontal: 5,
		aspectRatio: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: '#00000011',
		borderWidth: 5,
	},

	containerHead: {
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		elevation: 20,
		paddingHorizontal: 25,
		paddingVertical: 5,
		paddingTop: 40,
		flexGrow: 0,
		flexDirection: 'row',
		backgroundColor: '#333',
	},

	tergetContHead: {
		width: '15%',
		margin: 0,
		marginHorizontal: 5,
		aspectRatio: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})
