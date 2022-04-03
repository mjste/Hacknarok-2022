import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, Text, View } from 'react-native'
import { Entypo } from '@expo/vector-icons'

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

export const ResolutionsDay: React.FC<IResolutionsDayProps> = ({ date, resolutions }) => {
	const mapIcon = (state: ResoultionState) => {
		if (state === 'failed') return <Feather name="x" size={24} color="black" />
		if (state === 'succes') return <Feather name="check" size={24} color="black" />
		if (state === 'partial') return <Entypo name="dot-single" size={24} color="black" />
		if (state === 'unchecked') return <Feather name="minus" size={24} color="black" />
		if (state === 'none') return null
	}

	return (
		<View style={styles.container}>
			<View style={styles.dateCont}>
				<Text style={styles.date}>{date}</Text>
			</View>
			{resolutions.map((x, i) => (
				<View style={styles.tergetCont} key={i}>
					<Text>{mapIcon(x)}</Text>
				</View>
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
