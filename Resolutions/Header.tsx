import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from "react-native";
import { Item } from "./Item";
import { State } from "./data";
import { ResIcon } from "./ResIcon";

interface HeaderProps {
  names: string[];
}

export const Header: React.FC<HeaderProps> = ({ names }) => {
  const nameTexts = names.map((name, i) => <ResIcon state={name} key={i} />);
  const width = "10%";
  return (
    <View style={[styles.row]}>
      <Text style={[styles.states, { width }]}></Text>
      {nameTexts}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#000000",
    padding: "1.5%",
    marginVertical: "0.5%",
    marginHorizontal: 0,
    flexDirection: "row",
  },
  states: {
    fontSize: 32,
    color: "white",
  },
});
