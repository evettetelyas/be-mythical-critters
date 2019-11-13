class Wizard {
	constructor(hash) {
		this.name = hash.name;
		this.rested = true;
		this.castCount = 0;
		if (hash.bearded == false) {
			this.bearded = false
		} else {
			this.bearded = true
		};
	}

	incantation(phrase) {
		return phrase.toUpperCase()
	}

	cast() {
		this.castCount ++
		if (this.castCount >= 3) {
			this.rested = false;
			return "I SHALL NOT CAST"
		} else {
			return "MAGIC BULLET"
		}
	}
}

module.exports = Wizard;