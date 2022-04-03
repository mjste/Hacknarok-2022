import { ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../../colors'
import { ResolutionsDay } from '../../components/ResolutionsDay'
import { SafeAreaView } from '../../components/SafeAreaView'
import { DaysGrid } from './DaysGrid'
import { FeedList } from './Feed'
import { OrgInfo } from './OrgInfo'

const Home = () => {
	return (
		<ScrollView>
			<View style={styless.header}>
				<OrgInfo name="Przytul Jeża" amountGiven={21.37} />
				<DaysGrid />
				<ResolutionsDay date="3 Apr" resolutions={['succes', 'succes', 'partial', 'unchecked']} id="???" />
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
		paddingBottom: 20,
		elevation: 5,
	},
})

export default Home
