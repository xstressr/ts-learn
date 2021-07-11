//布尔型
let isDone: boolean = false;

console.log(isDone);


//数组
let list: number[] = [1, 2, 3];

console.log(list[0]);


//约束类型，元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同

let x: [string, number] = ['hello', 10]

console.log(x[0].substr(0));


//枚举
//使用枚举类型可以为一组数组赋予友好的名字
enum Color {Red = 1, Green = 2, Blue = 3}
let c: Color = Color.Green
console.log(c);


//空值
// 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型，当一个
// 函数没有返回值时，你通常会见到其返回值类型是void：


//Null 和 Undefined
// TypeScript里，undefined和null两者各自自己的类型分别叫做undefined和null。


// Never
// never类型表示