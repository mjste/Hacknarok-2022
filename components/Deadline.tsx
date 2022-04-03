import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import colors from "../colors";

const yesterday = new Date();
yesterday.setHours(23, 59, 59, 999);

const today = new Date(yesterday);
today.setDate(today.getDate() + 1);
today.setHours(12, 0, 0, 0);

export interface IDeadline {
  name: string;
  date: Date;
  cash: number;
}

export const deadlineArray: IDeadline[] = [
  { name: "Hacknarok: the end", date: today, cash: 9999999 },
  { name: "Północ", date: yesterday, cash: 0 },
  { name: "Frinder", date: yesterday, cash: 2137 },
  { name: "foo", date: today, cash: 420 },
];

export function compareDeadlines(a: IDeadline, b: IDeadline) {
  if (a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  }
  return 0;
}

interface DeadlineProps {
  index: number;
}

export function Deadline(props: IDeadline) {
  deadlineArray.sort(compareDeadlines);
  let secondsLeft = Math.floor(
    (props.date.getTime() - new Date().getTime()) / 1000
  );
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  let daysLeft = Math.floor(hoursLeft / 24);
  hoursLeft %= 24;
  minutesLeft %= 60;

  return (
    <View style={styles.DeadlineStyleBox}>
      <Text style={styles.DeadlineStyleHeader}>{props.name}</Text>
      <Text style={styles.DeadlineStyleText}>
        Time left: {daysLeft} days {hoursLeft}h {minutesLeft}m{" "}
      </Text>
      <MoneyAmount cash={props.cash} />
    </View>
  );
}

interface MoneyAmountProps {
  cash: number;
}

function MoneyAmount(props: MoneyAmountProps) {
  if (props.cash > 0) {
    return (
      <View>
        <Text style={styles.MoneyAmountStyle}>
          Cash: {props.cash} cebulionów
        </Text>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  DeadlineStyleHeader: {
    fontSize: 20,
    backgroundColor: colors.Secondary,
    borderRadius: 10,
    padding: 5,
    color: colors.OnSecondary,
  },
  DeadlineStyleBox: {
    padding: 3,
    margin: 3,
  },
  DeadlineStyleText: {
    fontSize: 18,
  },
  MoneyAmountStyle: {
    fontSize: 18,
  },
});
