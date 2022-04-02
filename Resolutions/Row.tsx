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
  date: Date;
  states: State[];
}

export const Row: React.FC<RowProps> = ({ date, states }) => {
  const backgroundColor: string =
    date.getUTCDate() === new Date().getUTCDate() ? "#00cccc" : "#222222";
  const statesTexts = states.map((state, i) => <Item state={state} key={i} />);
  const width = "10%";
  return (
    <View style={[styles.row, { backgroundColor }]}>
      <Text style={[styles.states, { width }]}>{date.getUTCDate()}</Text>
      {statesTexts}
    </View>
  );
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
    color: "white",
  },
});
