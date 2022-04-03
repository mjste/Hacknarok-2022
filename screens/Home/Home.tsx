import { ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../../colors'
import { SafeAreaView } from '../../components/SafeAreaView'
import { DaysGrid } from './DaysGrid'
import { FeedList } from './Feed'
import { OrgInfo } from './OrgInfo'

const ResolutionsDay = () => {
	return (
		<View style={styles.container}>
			<View style={styles.dateCont}>
				<Text style={styles.date}>10 Mar</Text>
			</View>
			<View style={styles.tergetCont}>
				<Text>V</Text>
			</View>
			<View style={styles.tergetCont}>
				<Text>X</Text>
			</View>
			<View style={styles.tergetCont}>
				<Text>X</Text>
			</View>
			<View style={styles.tergetCont}>
				<Text>V</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 25,
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
})

const Home = () => {
	return (
		<ScrollView>
			<View style={styless.header}>
				<OrgInfo name="Przytul Jeża" amountGiven={21.37} />
				<DaysGrid />
				<ResolutionsDay />
			</View>
			<FeedList />
		</ScrollView>
	)
}

const styless = StyleSheet.create({
	header: {
		backgroundColor: 'white',
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		paddingBottom: 10,
		elevation: 5,
	},
})

export default Home
