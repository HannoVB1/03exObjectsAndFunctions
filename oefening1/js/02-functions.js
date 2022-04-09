'use strict';

const aRedBicycle = {
  speed: 30,
  gear: 1,
  color: 'red'
};

const aGreenBicycle = {
  speed: 15,
  gear: 3,
  color: 'green'
};

// Schrijf een functie swapColors die de kleur van twee bicycles wisselt

function swapColors(bycicle1,bycicle2){
  const color = bycicle1.color;
  bycicle1.color = bycicle2.color;
  bycicle2.color = color;
}
// Schrijf een functie sameColor die een boolean retourneert
// die vertelt of twee bicycles dezelfde kleur hebben.
// Gebruik een arrow functie

let sameColor = (bike1,bike2) => bike1.color == bike2.color;

// Schrijf een functie getBikesWithColor met een kleur en een willekeurig aantal bicycles
// als parameters. De functie retourneert alle fietsen met de opgegeven kleur.
// Maak gebruik van de Array-methode filter, bekijk de documentatie op https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Geef een arrow functie door als parameter voor filter

function getBikesWithColor(color, ...bikes){
  const result = bikes.filter(bike => bike.color == color);
  return result;
}

// Je kan onderstaande uit commentaar zetten en gebruiken om je functies te testen:
swapColors(aRedBicycle, aGreenBicycle);
console.log(`myRedBicycle is now ${aRedBicycle.color}`);
console.log(`myGreenBicycle is now ${aGreenBicycle.color}`);
console.log( 	`aRedBicycle & aGreenBicycle ${
		sameColor(aRedBicycle, aGreenBicycle) ? '' : 'do not '
	}have the same color`
);

const redBikes = getBikesWithColor('red', aRedBicycle, aGreenBicycle);
console.log(redBikes);
