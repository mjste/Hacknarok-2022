import React from "react";
import { StyleSheet, View, Text, ToastAndroid, Platform } from "react-native";
import {
  deadlineArray,
  NextDeadline,
  Deadline,
  compare,
} from "../../components/NextDeadline";
import { FAB } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "../../components/SafeAreaView";

function Deadlines() {
  let prevDate = 0;
  return (
    <SafeAreaView>
      <View style={[styles.DeadlinesStyle]}>
        <StatusBar style="auto" />
        <View style={styles.DeadlinesListStyle}>
          {deadlineArray.sort(compare).map((item, index) => {
            if (item.date.getDate() != prevDate) {
              prevDate = item.date.getDate();
              return [
                <DayHeader date={item.date} key={2 * index} />,
                <NextDeadline index={index} key={2 * index + 1} />,
              ];
            }
            return <NextDeadline index={index} key={2 * index} />;
          })}
        </View>
        <FAB
          title={"Create"}
          placement={"right"}
          onPress={() => {
            if (Platform.OS == "android") {
              ToastAndroid.show("General Kenobi", ToastAndroid.SHORT);
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}

export default Deadlines;

const styles = StyleSheet.create({
  DeadlinesStyle: {
    width: "100%",
    height: "100%",
  },
  DeadlinesListStyle: {
    width: "100%",
    height: "30%",
  },
  DayHeaderStyle: {
    fontSize: 24,
    backgroundColor: "cyan",
    padding: 5,
    margin: 5,
    borderRadius: 10,
  },
});

interface DayHeaderProps {
  date: Date;
}

function DayHeader(props: DayHeaderProps) {
  return (
    <View>
      <Text style={styles.DayHeaderStyle}>
        Day: {props.date.getDate()}.{props.date.getMonth()}.
        {props.date.getFullYear()}
      </Text>
    </View>
  );
}
