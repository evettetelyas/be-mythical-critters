class Medusa {
	constructor(name, statues) {
		this.name = name;
		this.statues = [];
	}

	stare(victim) {
		if (this.statues.length === 3) {
			this.statues.shift().stoned = false
		}
		victim.stoned = true
		this.statues.push(victim)
	}
}

module.exports = Medusa;