import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  ListRenderItem,
} from "react-native";
import useColorScheme from "./ColorScheme";
import { rowData, IRow } from "./Resolutions/data";
import { Row } from "./Resolutions/Row";

interface renderProps {
  row: IRow;
}

const App = () => {
  let colorScheme = useColorScheme();

  const renderRow: ListRenderItem<IRow> = ({ item }) => (
    <Row states={item.states} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rowData}
        renderItem={renderRow}
        keyExtractor={(row) => row.id}
        horizontal={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111111",
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
