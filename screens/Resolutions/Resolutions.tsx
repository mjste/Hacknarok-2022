import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
  ListRenderItem,
} from "react-native";
import { rowData, IRow, headerData, IHeader } from "./data";
import { Row } from "./Row";
import { Header } from "./Header";
import { WeeklySummary } from "./WeeklySummary";
import React from "react";
interface renderProps {
  row: IRow;
}

const Resolutions = () => {
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
      <WeeklySummary />
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

export default Resolutions;
