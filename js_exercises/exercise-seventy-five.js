let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat () {
    console.log(retreatMessage);
  }, // Comma or separator is required here
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
alienShip.retreat();
alienShip.takeOff();
