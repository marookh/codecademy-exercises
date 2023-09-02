const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

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

