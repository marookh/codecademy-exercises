// create a switch stetment 
let athleteFinalPosition = 'second place';
switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!')
  break;
  case 'second place':
  console.log('You get the silver medal!')
  break;
  case 'third place':
  console.log('You get the bronze medal!')
  break;
  default:
  console.log('No medal awarded.') // None of the above will print
  break;
}
