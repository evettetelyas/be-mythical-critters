class Sphinx {
	constructor(name) {
		this.name = name;
		this.riddles = [];
		this.heroesEaten = 0;
	}

	collectRiddle(riddle) {
		if (this.riddles.length == 3) {
			this.riddles.shift()
			this.riddles.push(riddle)
		} else {
			this.riddles.push(riddle)
		}
	}
	
	attemptAnswer(answer) {
		let total = this.riddles.length
		this.riddles = this.riddles.filter(riddle => riddle.answer !== answer)
		let newCount = this.riddles.length
		if (!this.riddles.length) {
			return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`
		} else if (total !== newCount) {
			return "That wasn\'t that hard, I bet you don\'t get the next one"
		} else {
			this.heroesEaten ++
		}
	}
}

module.exports = Sphinx;