var OregonH = OregonH || {};

const config = {
	// Define weight of each item
	crew: 200,  // the weight of a fully equipped sky-sailor
	fuel: 100, // the weight of magical crystals cores, in pounds
	food: 15, // pounds of food & clean water a person eats in a day
	gold: 7, // 100 troy ounces of .99 pure gold, in pounds (worth ±$50,000)
	cannons: 3000,  // Weight of cannons
	plating: 3000, // Weight of extra padding

	// Resource Consumption
	foodRate: 15, // in pounds

	// Game Settings
	gameCycle: 800, // milliseconds
	eventRate: 0.15, // probability
	finalMile: 10000, // final goal

	//

}

//initiate the game
OregonH.Game.init = function () {
	//setup caravan
	this.caravan = OregonH.Caravan;
	this.caravan.init({
		day: 0,
		distance: 0,
		crew: 30,
		food: 80,
		oxen: 2,
		money: 300,
		firepower: 2
	});
};

// initialize game