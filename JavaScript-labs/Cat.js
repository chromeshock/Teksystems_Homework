class Cat {
    //class definition
    constructor(type, sex, name, age) {
       //properties
        this.type = type;
        this.sex =  sex;
        this.name = name;
        this.age = age;
    }
//method definition
getAnimalBio() {
    let AnimalBio = `${this.type} ${this.sex} ${this.name} ${this.age}`;
    return AnimalBio;
}

getSuggetion() {
    let AnimalBio = `${this.type} ${this.sex} ${this.name} ${this.age}`;
    return AnimalBio;
}

getSupplies() {
    let CatStuff = `${this.type} ${this.sex} ${this.name} ${this.age}`;
    return CatStuff;
}


}

let myCat = new Cat('sphinx', 'female', 'sara', 5);
let wantACat = new Cat('Siamese', 'male', 'sara', 1);
let CatStuff = new Cat('food', 'water', 'brush', 'id');

console.log(myCat.getAnimalBio());
console.log(wantACat.getSuggetion());
console.log(CatStuff.getSupplies());





