import { Button } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../colors";

export function FinishDeadlineButton() {
  return (
    <View style={styles.FinishDeadlineButtonViewStyle}>
      <Button title={"Finish task"} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  FinishDeadlineButtonViewStyle: {
    width: "30%",
    alignSelf: "center",
    borderRadius: 10,
  },
});
