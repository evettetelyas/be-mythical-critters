class Hobbit {
	constructor(name) {
		this.name = name;
		this.disposition = 'homebody';
		this.age = 0;
		this.adult = false;
		this.old = false;
		this.isShort = true;
		this.hasRing = false;
		if (this.name == 'Frodo') {
			this.hasRing = true;
		}
	}

	celebrateBirthday() {
		this.age ++
		if (this.age > 32) {
			this.adult = true;
		}
		if (this.age > 100) {
			this.old = true;
		}
	}
}

module.exports = Hobbit;