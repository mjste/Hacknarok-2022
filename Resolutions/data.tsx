export type State = "unchecked" | "failed" | "succes" | "partial" | "excused";

export interface IHeader {
  id: string;
  states: String[];
}

export const headerData: IHeader = {
  id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  states: ["Tick", "Work", "Siup", "asd"],
};

export interface IRow {
  id: string;
  states: State[];
}

export const rowData: IRow[] = [
  {
    id: "1d7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    states: ["failed", "succes", "partial", "excused"],
  },
  {
    id: "2ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    states: ["unchecked", "failed", "partial", "failed"],
  },
  {
    id: "38694a0f-3da1-471f-bd96-145571e29d72",
    states: ["failed", "failed", "partial", "failed"],
  },
  {
    id: "4d7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    states: ["failed", "succes", "partial", "failed"],
  },
  {
    id: "5ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    states: ["succes", "failed", "partial", "failed"],
  },
  {
    id: "68694a0f-3da1-471f-bd96-145571e29d72",
    states: ["failed", "failed", "unchecked", "failed"],
  },
  {
    id: "7d7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    states: ["failed", "succes", "partial", "failed"],
  },
  {
    id: "8ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    states: ["succes", "failed", "partial", "failed"],
  },
  {
    id: "98694a0f-3da1-471f-bd96-145571e29d72",
    states: ["failed", "failed", "partial", "failed"],
  },
];
