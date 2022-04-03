import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, View } from "react-native";
import colors from "../../colors";

const items = new Array(40).fill(0).map(() => {
  const seed = Math.random();
  return seed > 0.3 ? seed : 0.3;
});

interface GridElementProps {
  opacity: number;
}

const GridElement: React.FC<GridElementProps> = ({ opacity }) => {
  return (
    <View style={styles.squareContainer}>
      <View style={[styles.square, { opacity }]} />
    </View>
  );
};

export const DaysGrid = () => {
  const listItems = items.map((x, i) => <GridElement key={i} opacity={x} />);

  return (
    <View style={styles.container}>
      {listItems}
      <StatusBar style="auto" />
    </View>
  );
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  squareContainer: {
    padding: 5,
    width: (windowWidth - 40) / 7,
    height: 25,
  },
  square: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
    backgroundColor: colors.c1,
  },
});
