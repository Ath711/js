// immediately invoked function expressions (iife)

function db() {
  console.log("db connected ");
}

db();

// named iife
(function dbNew() {
  console.log("db connected");
})();

(() => {
  console.log("db connected");
})();

// unammed iifie
((name) => {
  console.log(`db connected ${name}`);
})("NAME");
