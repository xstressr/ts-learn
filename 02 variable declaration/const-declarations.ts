const numLivesForCat = 9;
const kitty = {
  name: "Aurora",
  numLives: numLivesForCat,
};

console.log(kitty.name);
console.log(kitty.numLives);




// all "okay"
kitty.name = "Rory";
console.log(kitty.name);
kitty.name = "Kitty";
console.log(kitty.name);
kitty.name = "Cat";
console.log(kitty.name);
kitty.numLives--;
console.log(kitty.numLives);