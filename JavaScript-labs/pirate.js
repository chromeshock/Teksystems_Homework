class Pirate {
    //class definition
    constructor(side, sex, name, age, hand, leg) {
       //properties
        this.side = side;
        this.sex =  sex;
        this.name = name;
        this.age = age;
        this.hand = hand;
        this.leg = leg;
    }
//method definition
getPiratesBio() {
    let PiratesBio = `${this.side} ${this.sex} ${this.name} ${this.age}  ${this.hand}  ${this.leg}`;
    return PiratesBio;
}

getHelp() {
    let Help = `${this.type} ${this.sex} ${this.name} ${this.age}  ${this.hand}  ${this.leg}`;
    return Help;
}

getDeclare() {
    let Declare = `${this.type} ${this.sex} ${this.name} ${this.age}`;
    return Declare;
}


}

let Outlaw = new Pirate('Evil', 'male', 'Davy Jones', 55, 'hook for a hand', 'wooden leg');
let GoodPirate = new Pirate('Good', 'female', 'Gwen', 42, 'both real hands', 'Both wooden legs');
let Surrender = new Pirate('Waving White Flag!');
let Triumph = new Pirate("You're Surrounded!");

console.log(Outlaw);
/*console.log(GoodPirate.getHelp());
console.log(Surrender.getDeclare());
*/




