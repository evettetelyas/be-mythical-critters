class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.layingDown = false;
		this.crankCount = 0;
		this.rested = true;
	}
	
	incrementCrank() {
		this.crankCount ++
		if (this.crankCount == 3) {
			this.cranky = true;
		}
	}

	shoot() {
		if (this.cranky != true && this.standing == true) {
		this.incrementCrank()
		return 'Twang!!!'
		} else {
			return "NO!"
		}
	}

	run() {
		if (this.standing == true) {
		this.incrementCrank()
		return 'Clop clop clop clop!!!'
		} else {
			return "NO!"
		}
	}

	sleep() {
		if (this.standing == true) {
			return 'NO!'
		} else {
			this.cranky = false;
			return 'ZZZZ'
		}
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;
	}

	standUp() {
		this.standing = true;
		this.layingDown = false;	
	}

	drinkPotion() {
		if (this.standing == true) {
			this.cranky = false;
			this.rested = false;
		}
		if (this.rested == true) {
			this.cranky = true;
		}
		return 'Not while I\'m laying down!'
	}
}

module.exports = Centaur;