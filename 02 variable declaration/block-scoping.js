/* function f(input: boolean) {
  let a = 100;

  if (input) {
    // still okay to reference 'a'
    let b = a + 1;
    return b;
  }

  // Error:'b' doesn't exist here
  return b;
} */
/* try {
  throw "oh no!";
} catch (e) {
  console.log("Oh well.");
}

// Error: 'e' doesn't exist here
console.log(e);
 */
/* function foo() {
  // okay to capture 'a'
  return a;
}
// illegal call 'foo' before 'a' is declared
// runtimes should throw an error here
foo();
let a; */
function theCityThatAlwaysSleeps() {
    var getCity;
    if (true) {
        var city_1 = "Seattle";
        getCity = function () {
            return city_1;
        };
    }
    return getCity();
}
var city = theCityThatAlwaysSleeps();
console.log(city);
