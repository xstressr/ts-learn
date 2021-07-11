setTimeout(function () {
  console.log("First");
  setTimeout(function () {
      console.log("Second");
      setTimeout(function () {
          console.log("Third");
      }, 3000);
  }, 4000);
}, 1000);