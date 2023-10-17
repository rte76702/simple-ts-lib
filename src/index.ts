import { type OpType, add, mul } from "./utils";

export const operation = (op: OpType, rhs: number, lhs: number): number => {
  switch (op) {
    case "ADD":
      return add(rhs, lhs);
    case "MUL":
      return mul(rhs, lhs);
    default:
      throw new Error("invalid operator");
  }
};

export const reduce = (
  op: OpType,
  initialVal: number,
  ...vals: number[]
): number => {
  switch (op) {
    case "ADD":
      return vals.reduce((acc, curr) => add(acc, curr), initialVal);
    case "MUL":
      return vals.reduce((acc, curr) => mul(acc, curr), initialVal);
    default:
      throw new Error("invalid operator");
  }
};
