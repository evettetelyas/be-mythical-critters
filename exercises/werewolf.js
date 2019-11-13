class Werewolf {
	constructor(name, location) {
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}

	change() {
		this.human = !this.human;
		this.wolf = !this.wolf;
		this.hungry = !this.hungry;
	}

	eat(victim) {
		if (!this.hungry) {
			var str = 'I cannot eat because I am not hungry.'
			return str
		} else {
			victim.alive = false;
			this.change();
			return 'YUM!'
		}

	}
}

module.exports = Werewolf;