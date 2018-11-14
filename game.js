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

	loop() {
		if (this.ship.days == 0) {
			this.initEvent();
		} else {
			this.randEvent();
		}
		const status = this.ship.setSail()
		console.log(status)
		if (status != undefined) {
			return status
		}
		this.loop()
	}
}