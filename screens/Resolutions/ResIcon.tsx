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
  icon: JSX.Element;
}

export const ResIcon: React.FC<ItemProps> = ({ state, icon }) => {
  return <View style={styles.item}>{icon}</View>;
};

const styles = StyleSheet.create({
  item: {
    height: 50,
    backgroundColor: "#bbbbbb",
    // padding: "1%",
    // marginVertical: "5%",
    marginHorizontal: "2%",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    // alignItems
  },
  title: {
    fontSize: 32,
  },
});
