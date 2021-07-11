
//过时方法
/* function greet(person: { name: string; age: number}) {
  return "Hello " + person.name;
} */


//通过interface传入指定类型
/* interface Person {
  name: String;
  age: number;
}
 */
/* function greet(person: Person) {
  return "Hello " + person.name;
} */

//或者使用类型别名
type Person = {
  name: string;
  age: number;
};

function greet(person: Person) {
  return "Hello " + person.name;
}

