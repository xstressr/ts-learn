//变量申明
/* function f() {
  var a = 10;
  return function g() {
      var b = a + 1;
      return b;
  }
}

var g = f();
console.log(g());
g(); // returns 11; */
function f() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
f(); // returns 2
