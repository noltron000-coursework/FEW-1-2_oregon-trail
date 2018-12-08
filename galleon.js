class Galleon {
	constructor(name, crew, food, fuel, gold, cannons, plating, maxWeight, maxSpeed) {
		// Boat Name
		this.name = name;

		// Boat Stock
		this.crew = crew;
		this.food = food;
		this.fuel = fuel;
		this.gold = gold;
		this.cannons = cannons;
		this.plating = plating;

		// Persistant Delta Variables
		this.reactor = 3; // amount of fuel used in reactor for today
		this.eatRate = 15; // amount of food fed to the crewmates
		this.dropStock = 0; // type of supplies to drop
		this.typeStock = ''; // amount of supplies to drop

		// Boat space-time continuum
		this.odometer = 0; // current mile
		this.duration = 0; // current day

		// Boat properties
		this.weight = 0
		this.speed = 0; // updated variable
		this.maxWeight = maxWeight; // default 1,000,000 lbs
		this.maxSpeed = maxSpeed; // usually 60 mpd
	}

	queryTypeStock() {
		alert("You are dropping supplies. What do you want to drop?");
		const typeStock = prompt("Enter a type of supplies...\n\nValid Choices:\nfuel\nfood\ncrew\ngold\ncannons\nplating");

		for (let supplies in this) {
			console.log(supplies);
			if (typeStock.toLowerCase() === supplies.toLowerCase()) {
				return typeStock
			}
		}
		alert("INVALID INPUT - TRY AGAIN");
		return this.queryTypeStock()
	}

	queryDropStock() {
		try {
			alert("You are dropping supplies. How much do you want to drop?")
			let dropStock = prompt("Enter an amount of supplies to drop...");
			dropStock = parseInt(Number(dropStock));
			return dropStock
		} catch {
			alert("INVALID INPUT - TRY AGAIN!!!!");
			return this.queryDropStock()
		}
	}

	queryFuelCores() {
		const fuelCores = prompt("Enter an amount of fuel cores...");
		// ENSURE QUANTITY IS AN INTEGER
		// Slider?
		return fuelCores // must return number of cores used up
	}

	// queryRationAmt() {
	// }

	getWeight() { // DONE
		const newWeight // calculating new weight
			= this.crew * config.crew
			+ this.fuel * config.fuel
			+ this.food * config.food
			+ this.gold * config.gold
			+ this.cannons * config.cannons
			+ this.plating * config.plating;
		return newWeight
	}

	getSpeed() { // TODO
		const newSpeed // calculating new speed
			= this.maxSpeed
			* this.reactor
			/ 6;
		return newSpeed
	}

	updatePantry() { // TODO
		this.food -= this.crew;
		this.food = Math.max(0, this.food);
	}

	updateWeight() { // TODO
		this.weight = this.getWeight();
		while (this.weight > this.maxWeight) {
			// TODO: show total stock of items.
			// TODO: show dropdowns of items.
			this.typeStock = this.queryTypeStock();
			// TODO: show updown counter of quantity.
			this.dropStock = this.queryDropStock();
			for (let property in this) {
				console.log(property);
			}
			this.weight = this.getWeight();
			break;
		}
	}

	updateEngine() { // checkEngine sets up the current speed of the vessel
		this.reactor = this.queryFuelCores();
		this.fuel -= this.reactor;
		this.getSpeed()
	}

	setSail() {
		// Ensure everyone is fed
		this.updatePantry();

		// Check if you would like to drop anything
		this.updateWeight();

		// Set up the reactor speed
		this.updateEngine();

		// update time and distances
		this.duration += 1;
		this.odometer += this.speed;
	}
}