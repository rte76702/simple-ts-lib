
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "operation", () => $882b6d93070905b3$export$7b8f6cec25af9dd);
$parcel$export(module.exports, "reduce", () => $882b6d93070905b3$export$533b26079ad0b4b);
const $9ba0f9a5c47c04f2$export$e16d8520af44a096 = (a, b)=>a + b;
const $9ba0f9a5c47c04f2$export$6e3a27864ab166fe = (a, b)=>a + b;


const $882b6d93070905b3$export$7b8f6cec25af9dd = (op, rhs, lhs)=>{
    switch(op){
        case "ADD":
            return (0, $9ba0f9a5c47c04f2$export$e16d8520af44a096)(rhs, lhs);
        case "MUL":
            return (0, $9ba0f9a5c47c04f2$export$6e3a27864ab166fe)(rhs, lhs);
        default:
            throw new Error("invalid operator");
    }
};
const $882b6d93070905b3$export$533b26079ad0b4b = (op, initialVal, ...vals)=>{
    switch(op){
        case "ADD":
            return vals.reduce((acc, curr)=>(0, $9ba0f9a5c47c04f2$export$e16d8520af44a096)(acc, curr), initialVal);
        case "MUL":
            return vals.reduce((acc, curr)=>(0, $9ba0f9a5c47c04f2$export$6e3a27864ab166fe)(acc, curr), initialVal);
        default:
            throw new Error("invalid operator");
    }
};


//# sourceMappingURL=main.js.map
