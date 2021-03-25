// A simple script that generate 3 words quotes.

//Read quotes' datas, and split them into arrays
const fs = require('fs');
const firstData = fs.readFileSync("./First_words.txt").toString('utf-8');
const first = firstData.split(' ');

const secondData = fs.readFileSync("./Second_words.txt").toString('utf-8');
const second = secondData.split(' ');

const thirdData = fs.readFileSync("./Third_words.txt").toString('utf-8');
const third = thirdData.split(' ');

// Generate ramdomize numbers as index for array.
let randFirst = Math.floor(Math.random() * first.length);

let randSecond = Math.floor(Math.random() * second.length);

let randThird= Math.floor(Math.random() * third.length);

// Output ramdomize 3 words quote.
console.log(`${first[randFirst]} ${second[randSecond]} ${third[randThird]}.`)
