import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { OrgInfo } from './OrgInfo';

const photo1 = require('./MockPhotos/mike.jpg')

 interface ProfileInfoProps{
    name: string
    daysAmount: number
  }
  export const ProfileInfo: React.FC<ProfileInfoProps> =({name, daysAmount}) => {
    return (
        <View style={styles.feedElement}>
            <Image style = {styles.photo} source={photo1}/>
            <View style={styles.text}>
                <Text style={styles.boldText}>{name}</Text>
                <Text>You are with us for: <Text style={styles.boldText}>{daysAmount}</Text> days</Text>
            </View>
            <View style={styles.orgInfo}>
            <OrgInfo  name={'Przytul jeża'} amountGiven={21.37}/>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
  text:{
    flexWrap: "wrap",
    flex: 1
  },
  boldText:{
    fontWeight: "bold",
    color: "green"
  },
  orgInfo:{
    margin: 5,
    alignSelf: 'flex-start'
  },
  feedElement: {
    marginTop: 20,
    marginLeft: 20,
    width: '100%',
    height: 100,
    alignItems: 'stretch',
    flex:1,
    flexDirection: 'row'
  },
  photo: {
      alignContent: 'flex-end',
      width: 100,
      height: 100,
      borderRadius: 500,
      margin: 5
  }
});
