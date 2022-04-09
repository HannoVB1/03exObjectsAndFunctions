'use strict';

const myBicycle = {
  speed: 30,
  gear: 1,
  frameMaterial: 'carbon fibre',
};

// Voeg een methode accelerate toe aan myBicycle
// De methode heeft 1 parameter, een percentage waarmee
// de speed van myBicycle moet worden aangepast

myBicycle.accelerate = function(perc) {myBicycle.speed += myBicycle.speed * (perc /100)};

// Laat de fiets 25% versnellen. Log de speed voor en na
// de methode aanroep.
console.log(myBicycle.speed);
myBicycle.accelerate(25)
console.log(myBicycle.speed);
// Voeg een methode toe die de snelheid beoordeelt
// De methode retourneert een string
// speed [0..10[ 'Walking...'
// speed [10..20[ 'Brakes on...'
// speed [20..40[ 'Pushing...'
// speed [40..60[ 'Peleton style...'
// speed >= 60 'Sagan style...

myBicycle.speed = function(speed)
  {let result;
    (speed>=0 && speed<10) ? result = "Walking... ":
    (speed>=10 && speed<20) ? result = "Brakes on... ":
    (speed>=20 && speed<40) ? result = "Pushing... ":
    (speed>=40 && speed<60) ? result = "Peleton style... ":
    (speed>=60) ? result = "Sagan style... ": result = "error";
    return result;
  };

console.log(myBicycle.speed(30));
// Stel de speed van myBicycle in op 5
// Test nu bovenstaande methode door in een lusje de speed in stapjes van 10%
// te verhogen (via de methode accelerate) en telkens de geretourneerde string te loggen.
// De iteratie stopt wanneer de speed van myBicycle hoger dan 100 is.
