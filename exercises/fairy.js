class Fairy {
	constructor(name) {
		this.name = name;
		this.dust = 10;
		this.clothes = {dresses: ['Iris']};
		this.disposition = 'Good natured';
		this.humanWards = [];
		this.stolenBabies = 0;
	}

	receiveBelief() {
		this.dust ++
	}

	believe() {
		this.dust += 10
	}

	makeDresses(ary) {
		var ary2 = this.clothes.dresses
		this.clothes.dresses = ary2.concat(ary)
	}

	provoke() {
		this.disposition = 'Vengeful'
	}

	replaceInfant(infant) {
		if (this.disposition == 'Vengeful') {
			infant.disposition = "Malicious"
			this.humanWards.push(infant)
			this.stolenBabies ++
			this.checkNature()
		} else {
			return infant
		}
	}

	checkNature() {
		if (this.stolenBabies == 3) {
			this.disposition = "Good natured"
		}
	}
}

module.exports = Fairy;