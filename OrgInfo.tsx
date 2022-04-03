import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

const photo1 = require("./MockPhotos/JEŻ.jpg");

interface FeedElementProps {
  name: string;
  amountGiven: number;
}
export const OrgInfo: React.FC<FeedElementProps> = ({ name, amountGiven }) => {
  return (
    <View style={styles.feedElement}>
      <Image style={styles.photo} source={photo1} />
      <View style={styles.text}>
        <Text>current foundation: </Text>
        <Text style={styles.boldText}>{name}</Text>
        <Text>amount passed:</Text>
        <Text style={styles.boldText}> {amountGiven} zł</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    flexWrap: "wrap",
    flex: 1,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "green",
  },
  feedElement: {
    marginTop: 20,
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    alignContent: "flex-end",
    width: 100,
    height: 100,
    margin: 5,
  },
});
