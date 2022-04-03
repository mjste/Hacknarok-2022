import { StatusBar } from 'expo-status-bar'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { OrgInfo } from '../Home/OrgInfo'

const photo1 = require('../Home/mike.jpg')
const photo3 = require('../Home/indeks.jpg')
const photo2 = require('../Home/juliette.jpg')

export const FeedList = () => {
	const numbers = []
	for (let i = 0; i < 8; i++) {
		numbers.push(i)
	}
	const listItems = numbers.map((number, i) => (
		<FeedElement key={i} name="No name lady" photo={photo3} TomatoesCounter={i} LikesCounter={4 - i} />
	))
	listItems.push(
		<FeedElement key={18927391827} name="Juliette" photo={photo2} TomatoesCounter={21} LikesCounter={37} />,
	)
	return (
		<View style={styles.container}>
			{listItems}
			<StatusBar style="auto" />
		</View>
	)
}

interface FeedElementProps {
	name: string
	photo: any
	TomatoesCounter: number
	LikesCounter: number
}
const FeedElement: React.FC<FeedElementProps> = ({ name, photo, TomatoesCounter, LikesCounter }) => {
	return (
		<View style={styles.feedElement}>
			<Image style={styles.photo_small} source={photo} />
			<View style={styles.text}>
				<Text>{name}</Text>
			</View>
		</View>
	)
}

interface ProfileInfoProps {
	name: string
	daysAmount: number
}
export const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, daysAmount }) => {
	return (
		<View style={styles.profileInfo1}>
			<View style={styles.profileInfo}>
				<OrgInfo name={'Przytul jeża'} amountGiven={21.37} />
				<View style={styles.orgInfo}>
					<Text style={styles.boldText}>Jan Paweł</Text>
					<Image style={styles.photo} source={photo1} />
					<Text>friens:</Text>
					<ScrollView>
						<FeedList />
					</ScrollView>
				</View>
			</View>
		</View>
	)
}

export default ProfileInfo

const styles = StyleSheet.create({
	scrollScreen: {
		width: '100%',
		height: '50%',
	},
	boldText: {
		fontWeight: 'bold',
		color: 'green',
	},
	orgInfo: {
		alignItems: 'center',
		alignSelf: 'flex-start',
	},
	profileInfo: {
		flex: 1,
		flexDirection: 'column',
	},
	profileInfo1: {
		flex: 1,
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		alignItems: 'stretch',
	},
	photo: {
		alignContent: 'flex-end',
		width: 100,
		height: 100,
		borderRadius: 100,
		margin: 5,
	},
	photo_small: {
		alignContent: 'flex-end',
		width: 70,
		height: 70,
		borderRadius: 100,
		margin: 5,
	},
	text: {
		flexGrow: 1,
	},
	feedElement: {
		width: '100%',
		height: 70,
		flexDirection: 'row',
		alignItems: 'center',
	},
	container: {
		height: '100%',
		width: '100%',
		backgroundColor: '#fff',
		alignItems: 'flex-start',
	},
})
