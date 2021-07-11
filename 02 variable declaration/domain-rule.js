// var声明的的奇怪作用域规则
/* function f(shouldInitialize: boolean) {
  if (shouldInitialize) {
      var x = 10;
  }

  return x;
}

f(true);  // returns '10'
f(false); // returns 'undefined' */
//捕获变量怪异之处
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () { console.log(i); }, 100 * i);
    })(i);
}
