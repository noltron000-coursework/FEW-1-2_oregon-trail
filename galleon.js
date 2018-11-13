class Galleon {
	constructor(name, crew, food, fuel, gold, cannons, plating, weightMax, speedMax) {
		this.name = name;

		// Boat Stock
		this.crew = crew;
		this.food = food;
		this.fuel = fuel;
		this.gold = gold;
		this.cannons = cannons;
		this.plating = plating;

		// // Boat Stock
		// this.supplies = {
		// 	crew: crew,
		// 	fodo: food,
		// 	fuel: fuel,
		// 	gold: gold,
		// 	cannons: cannons,
		// 	plating: plating
		// }

		// Boat space-time continuum
		this.mile = 0; // current mile
		this.days = 0; // weeks in open air

		// Boat properties
		this.weight // calculated variable
			= this.crew * config.crew
			+ this.fuel * config.fuel
			+ this.food * config.food
			+ this.gold * config.gold
			+ this.cannons * config.cannons
			+ this.plating * config.plating;
		this.weightMax = weightMax; // default 1,000,000 lbs
		this.speed = 0; // updated variable
		this.speedMax = speedMax; // usually 60 mpd
	}

	queryStockType() {
		// need to ask user for input
		console.log("ASK FOR STOCK-TYPE INPUT");
		return "gold" // must return a type of item
	}

	queryDropItems() {
		// need to ask user for input
		console.log("ASK FOR ITEM-DROP INPUT");
		return 1 // must return number of items dropped
	}

	queryFuelCores() {
		// need to ask user for input
		console.log("ASK FOR FUEL-CORE INPUT");
		return 1 // must return number of cores used up
	}

	ƒLogistics(x) { // check https://en.wikipedia.org/wiki/Logistic_function
		const y = 1 / (1 + Math.E ** (-2 * (x - 3)))
		return y
	}

	checkDinner() { // feed the crew
		this.food -= this.crew
		this.food = Math.max(0, this.food)
	}

	checkWeight() { // checkWeight ensures the weight of the vessel
		while (this.weight > this.weightMax) {
			const stockType = this.queryStockType();
			if (this.supply[stockType]) {
				const dropItems = this.queryDropItems();
				this.supply[stockType] -= dropItems
			}
		}
	}

	checkEngine() { // checkEngine sets up the current speed of the vessel
		const fuelCores = this.queryFuelCores();
		this.fuel -= fuelCores
		this.speed = this.ƒLogistics(fuelCores) * this.speedMax;
	}

	setSail() {
		this.checkDinner();
		this.checkWeight();
		this.checkEngine();
		this.days += 1;
		this.mile += this.speed;
	}
}