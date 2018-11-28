class Game {
	constructor(ship) {
		this.ship = ship;
	}

	initEvent() {
		console.log("wowser, first event")

	}

	randEvent() {
		console.log("random event")
		this.ship.cannons += 50000
	}

	objective() {
		// First check situations where the player has lost.
		if (this.ship.plating == 0) { // ran out of hull plating
			return false
		}
		else if (this.ship.crew == 0) { // ran out of crew
			return false
		}
		else if (this.ship.food == 0) { // ran out of food
			return false
		}
		else if (this.ship.fuel == 0) { // ran out of fuel
			return false
		}
		// now check if the player could have won the game.
		else if (this.ship.mile >= config.finalMile) { // you have won!
			return true
		}
		else { // nothing has happened
			return undefined
		}
	}

	loop() {
		if (this.ship.days == 0) {
			this.initEvent();
		} else {
			this.randEvent();
		}
		this.ship.setSail();
		const status = this.objective()
		console.log(status)
		if (status != undefined) {
			return status
		}
		this.loop()
	}
}
