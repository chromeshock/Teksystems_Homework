 class Hamster {
//constructor blueprint for object
   constructor(owner, name, price) {
    this.owner = owner;
    this.name = name;
    this.price = price;
    
   }

   //methods definitions

    wheelRun() {
        console.log('squeak squeak');
    }

    eatFood() {
        console.log('nibble nibble');
    }

    getPrice() {
       return `${this.price}`;
    }

}

class MainOwner extends Hamster {
    constructor (owner, name, price) {
        super(owner, name, price)
      
    }
}

const output = new MainOwner('son', 'sam', 15);
const bill = new MainOwner('daughter', 'Betty', 15);
//let output = total();

console.log(bill);




class Person {
    constructor(name, age = 0, height = 0, weight = 0, mood = 0, hamsters = [], bankAccount = 0) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamsters;
    this.bankAccount = bankAccount;

    }


   //methods definitions
    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getWeight() {
        return this.weight;
    }

    greet() {
       console.log(`I'm` `${this.name}`);
    }

    eat(number) {
        this.weight += number;
        this.mood += number;
    }

    exercise(number) {
        this.weight -= number;
    }

    ageUp(number) {
        this.age += number;
        this.height += number;
        this.weight += number;
        this.mood -= number;
        this.bankAccount += 10;
    }

    buyHamster(hamster) {
       if (this.bankAccount >= hamster.getPrice()) {
        this.bankAccount -= hamster.getPrice();
        this.hamsters.push += 10;
        this.mood += 10;
        return 'Purchase Approved';
       } else {
       return 'Transaction Declined';
       }
    }

    getPrice() {
        
    }
}

let timmy = new Person('Timmy');
let gus = new Hamster('Gus');
gus.owner = 'Timmy';
console.log(gus.owner);
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
console.log(timmy);
timmy.ageUp(9);
console.log(timmy);
console.log(timmy.bankAccount);
console.log(timmy.buyHamster(gus));
console.log(timmy.bankAccount);
console.log(timmy.weight);
timmy.eat(5);
console.log(timmy.weight);
timmy.exercise(2);
console.log(timmy.weight);


//chef make dinners
class Dinner {
    //constructor blueprint for object
constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
}

}

class Chef extends Dinner{
    //constructor blueprint for object
constructor(appetizer, entree, dessert) {
    super(appetizer, entree, dessert)
    }
Appetizer() {
    this.appetizer;
    }

Entree() {
    this.entree;
    }

Dessert() {
    this.dessert;
    }
}


const dinner1 = new Chef('Calamari', 'Salmon_and_Rice_Pilaf','Baklava' );
const dinner2 = new Chef('Pita_Bread', 'Steak_and_Potatoes','Chocolate_Lava_Cake' );
const dinner3 = new Chef('Sliders', 'Fish_&_Chips','Cheese_)Cake' );

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);

/*
class MainOwner extends Hamster {
    constructor (owner, name, price) {
        super(owner, name, price)
      
    }
}

const output = new MainOwner('son', 'sam', 15);
const bill = new MainOwner('daughter', 'Betty', 15);
//let output = total();

console.log(bill);*/
