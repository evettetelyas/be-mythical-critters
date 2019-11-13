class Pirate {
	constructor(name, job = 'Scallywag') {
		this.name = name;
		this.job = job;
		this.cursed = false;
		this.curseCount = 0;
		this.booty = 0;
	}

	commitHeinousAct() {
		this.curseCount ++
		if (this.curseCount == 3) {
			this.cursed = true;
			this.curseCount = 0;
		}
	}

	robShip() {
		this.booty += 100
		return 'YAARRR!'
	}

}

module.exports = Pirate;