//数组解构
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/* let input = [1, 2];
let [first, second] = input;
console.log(first);       //outputs 1
console.log(second);       //outputs 2
 */
//函数调用
/* function f([first, second]: [number, number] ) {
  console.log(first);
  console.log(second);
}
f([1,2]); */
//使用...（三点表达式）来代表剩余的列表
/*
let [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest);

 */
//元组解构
/*
let tuple: [number, string, boolean] = [7, "hello", true];

let [a, b, c] = tuple;
console.log(a);
console.log(b);
console.log(c); */
//对象解构
var o = {
    a: 'f00',
    b: 12,
    c: "bar"
};
/*
let {a, b} = o;
console.log(a);
console.log(b);

 */
/* let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

console.log(total); */
//property renaming
// let { a: newName1, b: newName2 } = o;
// 可以设置默认值
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function f(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
//spread
/* let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus); */
//spread objects
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign(__assign({}, defaults), { food: "rich" });
console.log(search);
