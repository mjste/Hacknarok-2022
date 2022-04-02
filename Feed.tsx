import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';

//@ts-ignore
import photo1 from "./MockPhotos/indeks.jpg";
//@ts-ignore
import photo2 from "./MockPhotos/juliette.jpg";

interface FeedElementProps{
    name: string
    photo: any
    TomatoesCounter: number
    LikesCounter: number
  }
  const FeedElement: React.FC<FeedElementProps> =({name, photo, TomatoesCounter, LikesCounter}) => {
    return (
        <View style={styles.feedElement}>
        <Image style = {styles.photo} source={photo}/>
        <Text style = {styles.text}>{name}</Text>
        <Text style = {styles.text}>Zjadła chleb pierwszy raz od 3 dni *rzuć pomidorem*</Text>
        <Text style = {styles.text}>👍:{TomatoesCounter} 🍅:{LikesCounter}</Text>
        </View>
    );
}
export const FeedList = () =>{
  const numbers = [];
  for (let i=0;i<3;i++){
    numbers.push(i);
  }
  const listItems = numbers.map((number,i) =>  
  <FeedElement key={i} name='No name lady' photo={photo1} TomatoesCounter={i} LikesCounter={4-i}  />);
  listItems.push(<FeedElement name ='Juliette' photo={photo2} TomatoesCounter={21} LikesCounter={37}/>);
  return (
    <View style={styles.container}>
      {listItems}
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {  
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  text:{
    width: '100%',

  },
  feedElement: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  },
  photo: {
      alignContent: 'flex-end',
      width: 100,
      height: 100,
      borderRadius: 500,
      margin: 5
  }
});
