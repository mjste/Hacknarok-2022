import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const today = new Date();
today.setHours(23, 59, 59, 999);

const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(12, 0, 0, 0);

interface Whatever {
  name: string;
  date: Date;
  cash: number;
}

const deadlineArray: Whatever[] = [
  { name: "Hacknarok: the end", date: tomorrow, cash: 9999999 },
  { name: "Północ", date: today, cash: 0 },
];

function compare(a: Whatever, b: Whatever) {
  if (a.date < b.date) {
    return -1;
  } else if (a.date > b.date) {
    return 1;
  }
  return 0;
}

interface NextDeadlineProps {
  index: number;
}

export function NextDeadline(props: NextDeadlineProps) {
  deadlineArray.sort(compare);
  let secondsLeft = Math.floor(
    (deadlineArray[props.index].date.getTime() - new Date().getTime()) / 1000
  );
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  let daysLeft = Math.floor(hoursLeft / 24);
  hoursLeft %= 24;
  minutesLeft %= 60;

  return (
    <View style={styles.DeadlineStyleBox}>
      <Text style={styles.DeadlineStyleHeader}>
        {deadlineArray[props.index].name}
      </Text>
      <Text style={styles.DeadlineStyleText}>
        Time left: {daysLeft} days {hoursLeft}h {minutesLeft}m{" "}
      </Text>
      <MoneyAmount cash={deadlineArray[props.index].cash} />
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
        <Text>Cash: {props.cash} hajsów</Text>
      </View>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  DeadlineStyleHeader: {
    fontSize: 24,
    backgroundColor: "#d10202",
    borderRadius: 10,
    padding: 5,
    color: "white",
  },
  DeadlineStyleBox: {
    padding: 3,
    margin: 3,
  },
  DeadlineStyleText: {
    fontSize: 14,
  },
});
