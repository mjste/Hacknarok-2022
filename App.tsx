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
import { rowData, IRow, headerData, IHeader } from "./Resolutions/data";
import { Row } from "./Resolutions/Row";
import { Header } from "./Resolutions/Header";
interface renderProps {
  row: IRow;
}

const App = () => {
  let colorScheme = useColorScheme();

  const renderRow: ListRenderItem<IRow> = ({ item }) => (
    <Row date={item.date} states={item.states} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header names={headerData.names}></Header>
      <FlatList
        inverted
        data={[...rowData].reverse()}
        renderItem={renderRow}
        keyExtractor={(row) => row.id}
        horizontal={false}
        // initialScrollIndex={rowData.length - 1}
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
