import { FlatList, SafeAreaView, StyleSheet, StatusBar, Text, View, ListRenderItem } from 'react-native'
import { rowData, headerData } from './data'
import { Header } from './Header'
import { WeeklySummary } from './WeeklySummary'
import React from 'react'
import colors from '../../colors'
import { IResolutionsDayProps, ResolutionsDay, ResolutionsHeader } from '../../components/ResolutionsDay'

//===========================================================
// MOCK DATA

const x: IResolutionsDayProps[] = [
	{
		id: '4d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		date: '1 Apr',
		resolutions: ['failed', 'succes', 'partial', 'failed'],
	},
	{
		id: '5ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		date: '2 Apr',
		resolutions: ['succes', 'failed', 'partial', 'failed'],
	},
	{
		id: '68694a0f-3da1-471f-bd96-145571e29d72',
		date: 'Today',
		resolutions: ['failed', 'failed', 'unchecked', 'failed'],
	},
	{
		id: '7d7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		date: 'Tomorow',
		resolutions: ['none', 'none', 'none', 'none'],
	},
]

for (let i = 31; i > 1; i--) {
	x.unshift({
		id: `Mar${i}`,
		date: i.toString() + ' Mar',
		resolutions: ['succes', 'succes', 'succes', 'succes'],
	})
}

for (let i = 5; i < 10; i++) {
	x.push({
		id: `Apr${i}`,
		date: i.toString() + ' Apr',
		resolutions: ['none', 'none', 'none', 'none'],
	})
}

//===========================================================

const Resolutions = () => {
	const renderRow: ListRenderItem<IResolutionsDayProps> = ({ item }) => <ResolutionsDay {...item} />

	return (
		<View style={styles.container}>
			{/* <Header names={headerData.names} icons={headerData.icons}></Header> */}
			<ResolutionsHeader />
			<FlatList
				inverted
				data={[...x].reverse()}
				renderItem={renderRow}
				keyExtractor={row => row.id}
				horizontal={false}
				// initialScrollIndex={rowData.length - 1}
			/>
			<WeeklySummary daysLeft={5} currentPercentage={34} goalPercentage={80} stakes={37} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.Background,
		flex: 1,
	},
})

export default Resolutions
