type OpType = "ADD" | "MUL";
export const operation: (op: OpType, rhs: number, lhs: number) => number;
export const reduce: (op: OpType, initialVal: number, ...vals: number[]) => number;

//# sourceMappingURL=types.d.ts.map
