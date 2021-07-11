//数组解构

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
let o = {
  a: 'f00',
  b: 12,
  c: "bar",
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
function keepWholeObject(wholeObject: { a: string; b?: number }) {
  let { a, b = 1001 } = wholeObject;
}



//函数解构
type C = { a: string; b?: number };
function f({ a, b }: C): void {
  // ...
}


//spread
/* let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
console.log(bothPlus); */


//spread objects
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };

console.log(search);
