const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(k) {
  kittens.push(k);
}

function destructivelyPrependKitten(k) {
  kittens.unshift(k);
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
}

function appendKitten(name) {
  var kittens2 = [...kittens, name]
  return kittens2;
}

function prependKitten(name) {
  var kittens2 = [name, ...kittens]
  return kittens2;
}

function  removeLastKitten() {
  var kittens2 = kittens.slice(0,2);
  return kittens2;
}

function removeFirstKitten() {
  var kittens2 = kittens.slice(1);
  return kittens2;
}
