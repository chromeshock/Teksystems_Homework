class Character {
    constructor () {
      this.legs = 2;
      this.arms = 2;
      this.eyes = 'hazel';
      this.hair = 'gray';
    }
    greet (otherCharacter) {
      console.log('hi ' + otherCharacter + '!');
    }
    smite () {
      console.log('I smite thee you vile person');
    }
  }
  const me = new Character();
  console.log(me);
  greet(otherCharacter);