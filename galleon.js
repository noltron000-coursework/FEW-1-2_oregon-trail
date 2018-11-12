var OregonH = OregonH || {};

class Galleon {
	constructor(name) {
		this.name = name;

		// Boat Stock
		this.crew = crew;
		this.fuel = fuel;
		this.food = food;
		this.gold = gold;
		this.cannons = cannons;
		this.plating = plating;

		// boat properties
		this.weight // calculated variable
			= this.crew * config.weight.crew
			+ this.fuel * config.weight.fuel
			+ this.food * config.weight.food
			+ this.gold * config.weight.gold
			+ this.cannons * config.weight.cannons
			+ this.plating * config.weight.plating;
		this.weightMax = weightMax; // default 1,000,000lbs

		this.speed = speed; // calculated
		this.speedMax = speedMax; // 60mph

	}


	updateWeight() {
		let droppedFood = 0;
		let droppedFuel = 0;
		let droppedGold = 0;
		let droppedCrew = 0;
		let droppedCannons = 0;
		let droppedPlating = 0;

		while (weight > weightMax) {
			this.askToDrop()
			this.weightMax
			this.crew * config.weightCrew
			break
		}
	}

	calculateWeight() {
	}

	updateFood() {

	}

	updateDistance() {

	}
}

myShip = new Galleon("Salvation")

console.log(myShip)


// //update weight and capacity
// OregonH.Caravan.updateWeight = function () {
// 	var droppedFood = 0;
// 	var droppedGuns = 0;

// 	//how much can the caravan carry
// 	this.capacity = this.oxen * OregonH.WEIGHT_PER_OX + this.crew * OregonH.WEIGHT_PER_PERSON;

// 	//how much weight do we currently have
// 	this.weight = this.food * OregonH.FOOD_WEIGHT + this.firepower * OregonH.FIREPOWER_WEIGHT;

// 	//drop things behind if it's too much weight
// 	//assume guns get dropped before food
// 	while (this.firepower && this.capacity <= this.weight) {
// 		this.firepower--;
// 		this.weight -= OregonH.FIREPOWER_WEIGHT;
// 		droppedGuns++;
// 	}

// 	if (droppedGuns) {
// 		this.ui.notify('Left ' + droppedGuns + ' guns behind', 'negative');
// 	}

// 	while (this.food && this.capacity <= this.weight) {
// 		this.food--;
// 		this.weight -= OregonH.FOOD_WEIGHT;
// 		droppedFood++;
// 	}

// 	if (droppedFood) {
// 		this.ui.notify('Left ' + droppedFood + ' food provisions behind', 'negative');
// 	}
// };

// //update covered distance
// OregonH.Caravan.updateDistance = function () {
// 	//the closer to capacity, the slower
// 	var diff = this.capacity - this.weight;
// 	var speed = OregonH.SLOW_SPEED + diff / this.capacity * OregonH.FULL_SPEED;
// 	this.distance += speed;
// };

// //food consumption
// OregonH.Caravan.consumeFood = function () {
// 	this.food -= this.crew * OregonH.FOOD_PER_PERSON;
// };