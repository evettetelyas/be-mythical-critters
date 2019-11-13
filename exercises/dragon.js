class Dragon {
	constructor(name, rider, color) {
		this.name = name;
		this.rider = rider;
		this.color = color;
		this.hungry = true;
		this.hungerCount = 0
	}

	hungerCheck() {
		if (this.hungerCount % 3 == 0 && this.hungerCount != 0) {
			this.hungry = false;
		}
	}

	eat() {
		this.hungerCount++
		this.hungerCheck()
	}
}

module.exports = Dragon;