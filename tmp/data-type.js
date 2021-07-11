//布尔型
var isDone = false;
console.log(isDone);
//数组
var list = [1, 2, 3];
console.log(list[0]);
//约束类型，元组
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同
var x = ['hello', 10];
console.log(x[0].substr(0));
//枚举
//使用枚举类型可以为一组数组赋予友好的名字
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
