import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { feedMessages } from "./data";

const photo1 = require("./indeks.jpg");
const photo2 = require("./juliette.jpg");
const photos = [
  require("./hiszpanka2.jpg"),
  require("./Oktawian.jpg"),
  require("./hiszpanka4.jpg"),
  require("./juliette.jpg"),
  require("./szwedka1.jpg"),
  require("./cezar.png"),
  require("./racoon.jpg"),
];
const names = [
  "Feliciana Devera",
  "Oktawian August",
  "Adelina Santos",
  "Juliette B",
  "Ida Skoglund",
  "Julius Caesar",
  "Your Neighbour Racoon",
];

interface FeedElementProps {
  name: string;
  photo: any;
  TomatoesCounter: number;
  LikesCounter: number;
  i: number;
}
const FeedElement: React.FC<FeedElementProps> = ({
  name,
  photo,
  TomatoesCounter,
  LikesCounter,
  i,
}) => {
  return (
    <View style={styles.feedElement}>
      <Image style={styles.photo} source={photos[i]} />
      <View style={styles.text}>
        <Text>{name}</Text>
        <Text>{feedMessages[i]}</Text>
        <Text>
          👍:{LikesCounter} 🍅:{TomatoesCounter}
        </Text>
      </View>
    </View>
  );
};
export const FeedList = () => {
  const numbers = [];
  for (let i = 0; i < 6; i++) {
    numbers.push(i);
  }
  const listItems = numbers.map((number, i) => (
    <FeedElement
      key={i}
      name={names[i]}
      photo={photo1}
      TomatoesCounter={5 - i}
      LikesCounter={i}
      i={i}
    />
  ));
  return (
    <View style={styles.container}>
      {listItems}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    alignItems: "flex-start",
  },
  text: {
    flexGrow: 1,
    width: "50%",
  },
  feedElement: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    alignItems: "center",
  },
  photo: {
    alignContent: "flex-end",
    width: 80,
    height: 80,
    borderRadius: 500,
    margin: 10,
  },
});
