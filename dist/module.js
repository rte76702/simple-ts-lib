const $fab42eb3dee39b5b$export$e16d8520af44a096 = (a, b)=>a + b;
const $fab42eb3dee39b5b$export$6e3a27864ab166fe = (a, b)=>a + b;


const $149c1bd638913645$export$7b8f6cec25af9dd = (op, rhs, lhs)=>{
    switch(op){
        case "ADD":
            return (0, $fab42eb3dee39b5b$export$e16d8520af44a096)(rhs, lhs);
        case "MUL":
            return (0, $fab42eb3dee39b5b$export$6e3a27864ab166fe)(rhs, lhs);
        default:
            throw new Error("invalid operator");
    }
};
const $149c1bd638913645$export$533b26079ad0b4b = (op, initialVal, ...vals)=>{
    switch(op){
        case "ADD":
            return vals.reduce((acc, curr)=>(0, $fab42eb3dee39b5b$export$e16d8520af44a096)(acc, curr), initialVal);
        case "MUL":
            return vals.reduce((acc, curr)=>(0, $fab42eb3dee39b5b$export$6e3a27864ab166fe)(acc, curr), initialVal);
        default:
            throw new Error("invalid operator");
    }
};


export {$149c1bd638913645$export$7b8f6cec25af9dd as operation, $149c1bd638913645$export$533b26079ad0b4b as reduce};
//# sourceMappingURL=module.js.map
