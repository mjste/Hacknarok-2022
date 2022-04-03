import React from "react";
import { Text, View } from "react-native";
import {
  compareDeadlines,
  Deadline,
  deadlineArray,
  IDeadline,
} from "../../components/Deadline";
import * as R from "ramda";

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
  return (
    <View>
      <DayHeader day={props.values[0].date.toString()} />
      {props.values.map((value, i) => (
        <Deadline {...value} key={i} />
      ))}
    </View>
  );
}

function DayHeader(props: { day: string }) {
  return <Text>{props.day}</Text>;
}
