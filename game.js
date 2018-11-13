class Game {
	constructor(ship) {
		this.ship = ship;
	}

	initEvent() {

	}

	randEvent() {

	}

	gameLoop() {
		if (this.ship.days == 0) {
			this.initEvent();
			this.ship.setSail();
		} else {
			this.randEvent();
			this.ship.setSail();
		}
	}
}