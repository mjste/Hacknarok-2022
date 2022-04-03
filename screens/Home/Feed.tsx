import { StatusBar } from 'expo-status-bar'
import { Image, StyleSheet, Text, View } from 'react-native'

const photo1 = require('./indeks.jpg')
const photo2 = require('./juliette.jpg')

const mockFeed = [
	{
		name: 'nO nAME lADY',
		photo: photo1,
		TomatoesCounter: 1,
		LikesCounter: 5,
	},
	{
		name: 'nO nAME lADY',
		photo: photo2,
		TomatoesCounter: 5,
		LikesCounter: 2,
	},
	{
		name: 'nO nAME lADY',
		photo: photo1,
		TomatoesCounter: 1,
		LikesCounter: 33,
	},
	{
		name: 'nO nAME lADY',
		photo: photo2,
		TomatoesCounter: 69,
		LikesCounter: 5,
	},
]

interface FeedElementProps {
	name: string
	photo: any
	TomatoesCounter: number
	LikesCounter: number
}
const FeedElement: React.FC<FeedElementProps> = ({ name, photo, TomatoesCounter, LikesCounter }) => {
	return (
		<View style={styles.feedElement}>
			<Image style={styles.photo} source={photo} />
			<View style={styles.text}>
				<Text>{name}</Text>
				<Text>Zjadła chleb pierwszy raz od 3 dni *rzuć pomidorem*</Text>
				<Text>
					👍:{TomatoesCounter} 🍅:{LikesCounter}
				</Text>
			</View>
		</View>
	)
}
export const FeedList = () => {
	const numbers = []
	for (let i = 0; i < 3; i++) {
		numbers.push(i)
	}

	const feed = mockFeed.map((it, i) => (
		<FeedElement
			key={i}
			photo={it.photo}
			name={it.name}
			TomatoesCounter={it.TomatoesCounter}
			LikesCounter={it.LikesCounter}
		/>
	))

	// listItems.push(<FeedElement name="Juliette" photo={photo2} TomatoesCounter={21} LikesCounter={37} />)

	return (
		<View style={styles.container}>
			{feed}
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		height: '100%',
		width: '100%',
		alignItems: 'flex-start',
	},
	text: {
		flexGrow: 1,
	},
	feedElement: {
		width: '100%',
		height: 100,
		flexDirection: 'row',
		alignItems: 'center',
	},
	photo: {
		alignContent: 'flex-end',
		width: '20%',
		aspectRatio: 1,
		borderRadius: 500,
		margin: 10,
	},
})
