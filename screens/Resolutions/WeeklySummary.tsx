import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../colors'

interface IWeelySummary {
	daysLeft: number
	currentPercentage: number
	goalPercentage: number
	stakes: number
}

export const WeeklySummary: React.FC<IWeelySummary> = ({
	daysLeft = 5,
	currentPercentage = 34,
	goalPercentage = 80,
	stakes = 37,
}) => {
	return (
		<View style={[styles.container, { borderTopWidth: 1 }]}>
			<Text style={[styles.title, { flex: 0, fontSize: 15 }]}>Next weekly summary:</Text>
			<View style={[styles.container, { flexDirection: 'row' }]}>
				<Text style={styles.title}>
					{daysLeft} days{'\n'} left
				</Text>
				<Text style={styles.title}>
					{currentPercentage}%/{goalPercentage}%
				</Text>
				<Text style={styles.title}>
					Stakes:{'\n'} {stakes} zł{' '}
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#eee',
		zIndex: 2,
		paddingHorizontal: 4,
		paddingVertical: 5,
		color: colors.OnBackground,
		justifyContent: 'center',
		borderColor: '#ddd',
	},
	title: {
		color: colors.OnBackground,
		fontSize: 25,
		flexGrow: 1,
		textAlignVertical: 'center',
		textAlign: 'center',
	},
})
