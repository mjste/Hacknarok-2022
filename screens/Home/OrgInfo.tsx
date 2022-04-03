import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../../colors'

const photo1 = require('./JEŻ.jpg')

interface FeedElementProps {
	name: string
	amountGiven: number
}
export const OrgInfo: React.FC<FeedElementProps> = ({ name, amountGiven }) => {
	return (
		<View style={styles.container}>
			<Image style={styles.photo} source={photo1} />
			<View style={styles.textCont}>
				<Text style={styles.labelText}>current foundation: </Text>
				<Text style={styles.boldText}>{name}</Text>
				<Text style={styles.labelText}>amount passed:</Text>
				<Text style={styles.boldText}> {amountGiven} zł</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		elevation: 20,
		backgroundColor: colors.Primary,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	labelText: {
		color: 'white',
	},
	textCont: {
		color: 'white',
		flexWrap: 'wrap',
		flex: 1,
		paddingHorizontal: 30,
	},
	boldText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
	},
	photo: {
		alignContent: 'flex-end',
		width: '30%',
		aspectRatio: 1,
	},
})
