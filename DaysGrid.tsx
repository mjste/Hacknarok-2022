import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

interface GridElementProps{
  opacity: number
}
const GridElement: React.FC<GridElementProps> =({opacity}) => {
  return(
    <View style={[styles.square,{opacity}]}>
    </View>
  );
}
export const DaysGrid = () =>{
  const numbers = [];
  for (let i=0;i<40;i++){
    numbers.push(i);
  }
  const listItems = numbers.map((number,i) =>  <GridElement opacity={0.03*i+0.1}/>);
  return (
    <View style={styles.container}>
      {listItems}
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: 'row',
    height: '30%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text:{
    width: 'auto',
    textAlign: 'center',
  },
  grid: {
    backgroundColor: '#000',
    alignItems: 'center'

  },
  square: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '9%',
    height: '24%',
    borderRadius: 5,
    backgroundColor: "green",
    margin:1
  },
});
