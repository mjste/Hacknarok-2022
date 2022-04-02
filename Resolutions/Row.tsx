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

interface RowProps {
  states: State[];
}

export const Row: React.FC<RowProps> = ({ states }) => {
  const statesTexts = states.map((state, i) => <Item state={state} key={i} />);

  return <View style={styles.row}>{statesTexts}</View>;
};

const styles = StyleSheet.create({
  row: {
    backgroundColor: "#222222",
    padding: "1.5%",
    marginVertical: "0.5%",
    marginHorizontal: 0,
    flexDirection: "row",
  },
  states: {
    fontSize: 32,
  },
});
