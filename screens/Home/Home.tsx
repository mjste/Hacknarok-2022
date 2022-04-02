import { SafeAreaView, Text, View } from 'react-native'
import { DaysGrid } from './DaysGrid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faCoffee)

const Home = () => {
	return (
		<SafeAreaView>
			<DaysGrid />
			<FontAwesomeIcon icon={faCoffee} />
		</SafeAreaView>
	)
}

export default Home
