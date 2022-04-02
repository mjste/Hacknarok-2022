export type State = "unchecked" | "failed" | "succes" | "partial" | "excused";

export interface IHeader {
  id: string;
  names: string[];
}

export const headerData: IHeader = {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  // names: ["failed", "succes", "unchecked", "partial", "excused"],
  names: ["Tick", "Work", "Siup", "asd", "TAS"],
};

export interface IRow {
  id: string;
  date: Date;
  states: State[];
}

const generateData = (
  size: number,
  rowSize: number = 5,
  unfilled: number = 5
): IRow[] => {
  let ret: IRow[] = [];
  for (let i = 0; i < size; i++) {
    const states: State[] = [
      "failed",
      "succes",
      "unchecked",
      "partial",
      "excused",
    ];
    var myDate = new Date();
    myDate.setDate(myDate.getDate() - (size - i - 1));
    ret.push({
      id: `${i}`,
      date: myDate,
      states: states,
    });
    // for(let j = 0; j < row)
  }
  for (let i = 0; i < unfilled; i++) {
    const states: State[] = [
      "unchecked",
      "unchecked",
      "unchecked",
      "unchecked",
      "unchecked",
    ];
    var myDate = new Date();
    myDate.setDate(myDate.getDate() + i + 1);
    ret.push({
      id: `${i + size}`,
      date: myDate,
      states: states,
    });
    // for(let j = 0; j < row)
  }
  return ret;
};

export const rowData: IRow[] = generateData(20);

// [
//   {
//     id: "1d7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     states: ["failed", "succes", "partial", "excused"],
//   },
//   {
//     id: "2ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     states: ["unchecked", "failed", "partial", "failed"],
//   },
//   {
//     id: "38694a0f-3da1-471f-bd96-145571e29d72",
//     states: ["failed", "failed", "partial", "failed"],
//   },
//   {
//     id: "4d7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     states: ["failed", "succes", "partial", "failed"],
//   },
//   {
//     id: "5ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     states: ["succes", "failed", "partial", "failed"],
//   },
//   {
//     id: "68694a0f-3da1-471f-bd96-145571e29d72",
//     states: ["failed", "failed", "unchecked", "failed"],
//   },
//   {
//     id: "7d7acbea-c1b1-46c2-aed5-3ad53abb28ba",
//     states: ["failed", "succes", "partial", "failed"],
//   },
//   {
//     id: "8ac68afc-c605-48d3-a4f8-fbd91aa97f63",
//     states: ["succes", "failed", "partial", "failed"],
//   },
//   {
//     id: "98694a0f-3da1-471f-bd96-145571e29d72",
//     states: ["failed", "failed", "partial", "failed"],
//   },
// ];
