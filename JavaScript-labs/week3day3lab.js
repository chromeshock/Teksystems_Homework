/*const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat"
	}
}

console.log(adventurer.companion);

const adventurer = {
	name: Timothy,
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite"
            belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}  
	}
}
console.log(belongings[2]);*/

class Character {
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
  }
  const me = new Character();
  const you = new Character();
  me.greet('you');
  you.greet('me');