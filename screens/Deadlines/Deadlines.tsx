import React from "react";
import {
  StyleSheet,
  ToastAndroid,
  Platform,
  FlatList,
  ScrollView,
} from "react-native";
import {
  deadlineArray,
  IDeadline,
  Deadline,
  compareDeadlines,
} from "../../components/Deadline";
import { FAB } from "react-native-elements";
import { SafeAreaView } from "../../components/SafeAreaView";
import colors from "../../colors";
import { Day, byDay } from "./Day";

function Deadlines() {
  return (
    <SafeAreaView>
      <ScrollView>
        {byDay.map((x, i) => {
          const [index, values] = x;
          return (
            <Day key={i} index={Number(index)} values={values as IDeadline[]} />
          );
        })}
      </ScrollView>

      <FAB
        title={"Create"}
        placement={"right"}
        onPress={() => {
          if (Platform.OS == "android") {
            ToastAndroid.show("Hello there", ToastAndroid.SHORT);
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  DeadlinesStyle: {
    width: "100%",
    height: "100%",
  },
  DeadlinesListStyle: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.Surface,
  },
  DayHeaderStyle: {
    fontSize: 24,
    backgroundColor: colors.Secondary,
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
});

export default Deadlines;
