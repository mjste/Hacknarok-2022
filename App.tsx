import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import { NextDeadline } from "./NextDeadline";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Hello world {count}</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button
        title="Press Me"
        onPress={() => {
          setCount(count + 1);
        }}
      />
      <View style={styles.grid}>
        <NextDeadline index={0} />
        <NextDeadline index={1} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    display: "flex",
    width: "100%",
  },
});
