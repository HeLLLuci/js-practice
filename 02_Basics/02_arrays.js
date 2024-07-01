const marvel_heros = ["Thor", "Captain America", "Spider Man"]
const dc_heros = ["Superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

var newArray = marvel_heros.concat(dc_heros)
console.log(marvel_heros+dc_heros)
console.log(newArray);

var all_new_heros = [...marvel_heros, ...dc_heros]
console.log("A ",all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // Check whther the given input is array or not.
console.log(Array.from("Hitesh")); //return new array from any other datatypes.
console.log(Array.from({name: "hitesh"})) // you have to specify that whether we have to create array from values or from keys.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))