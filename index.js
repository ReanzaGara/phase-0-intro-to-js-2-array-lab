// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function getCats() {
    return cats;
  }
function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}
function destructivelyRemoveFirstCat(name) {
    cats.shift();
}
function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}
function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}
function removeLastCat() {
    const newCats = [...cats];
    newCats.pop();
    return newCats;
}
function removeFirstCat() {
    const newCats = [...cats];
    newCats.shift();
    return newCats;
}