import React from "react";
import { Text, View, StyleSheet, ViewStyle } from "react-native";
import {
  compareDeadlines,
  Deadline,
  deadlineArray,
  IDeadline,
} from "../../components/Deadline";
import * as R from "ramda";
import { color } from "react-native-elements/dist/helpers";
import colors from "../../colors";

interface IDay {
  index: number;
  values: IDeadline[];
}

export const byDay = R.pipe(
  R.groupBy((value: IDeadline) => {
    return String(Math.floor(value.date.getTime() / (1000 * 24 * 3600)));
  }),
  R.toPairs,
  R.sort((a, b) => {
    const aa = a[0];
    const bb = b[0];
    if (aa < bb) {
      return -1;
    } else if (bb < aa) {
      return 1;
    } else return 0;
  })
)(deadlineArray);

export function Day(props: IDay) {
  console.log(props.values[0].date);
  return (
    <View style={styles.DayStyle}>
      <DayHeader date={props.values[0].date} />
      {props.values.map((value, i) => (
        <Deadline {...value} key={i} />
      ))}
    </View>
  );
}

function DayHeader(props: { date: Date }) {
  return (
    <View style={styles.DayHeaderStyle}>
      <Text style={styles.DayHeaderTextStyle}>
        Day: {props.date.getDate()}.{props.date.getMonth()}.
        {props.date.getFullYear()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  DayStyle: {
    backgroundColor: colors.Surface,
    padding: 3,
    margin: 3,
    elevation: 5,
  },
  DayHeaderStyle: {
    backgroundColor: colors.Primary,
    padding: 5,
    margin: 3,
    borderRadius: 10,
    color: colors.OnPrimary,
  },
  DayHeaderTextStyle: {
    color: colors.OnPrimary,
    fontSize: 24,
  },
});
