const bobsFollowers = ['Saad', 'Sarah', 'Rahman', 'Razia'];
const zakiaFollowers = ['Sarah', 'Shaista', 'Razia'];
let bothFollowers = [];
for (let a = 0; a < bobsFollowers.length; a++) {
  for (let i = 0; i < zakiaFollowers.length; i++) {
    if (bobsFollowers[a] === zakiaFollowers[i]) {
      bothFollowers.push(bobsFollowers[a]);

    }
  }
}
console.log(bothFollowers);

const cards = ['diamond', 'spade', 'heart', 'club'];

// Writing my code below
let currentCards; // Don't assign it a value
while (currentCards !== 'heart') {
  currentCards = cards[Math.floor(Math.random() * 4)];
  console.log(currentCards);
}
console.log(currentCards); // The condition of while loop stop when the currentCards contained the heart value.


const loopArray = [33, 22 ,11, 75];
const arrayLoop = [32, 23, 12, 22, 33];
let emptyArray = [];
for (let a = 0; a < loopArray.length; a++) {
  for (let b = 0; b < arrayLoop.length; b++) {
    if (loopArray[a] === arrayLoop[b]) {
      console.log(`This array has this number: ${loopArray[a]} ${arrayLoop[b]}`);
    }
  }
}
for (let i = 0; i < 5; i++) {
  console.log(i)
}
let i = 0;
while (i < 5) {
  console.log(i);
  i++
}
