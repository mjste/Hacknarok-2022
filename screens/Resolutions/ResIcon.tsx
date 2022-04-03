import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";
import { State } from "./data";

interface ItemProps {
  state: string;
}

export const ResIcon: React.FC<ItemProps> = ({ state }) => {
  return <View style={styles.item}></View>;
};

const styles = StyleSheet.create({
  item: {
    height: 50,
    backgroundColor: "#bbbbbb",
    // padding: "1%",
    // marginVertical: "5%",
    marginHorizontal: "2%",
    flexGrow: 1,
    flexShrink: 1,
  },
  title: {
    fontSize: 32,
  },
});
