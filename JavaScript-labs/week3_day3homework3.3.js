class Governor {

    constructor (name, age, sex, state, politicalSide) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.state = state;
        this.politicalSide = politicalSide;
    }

 
    greeting () {
        
       return 'Hi..can i count on your vote ?';
    }
    
    static backGround () {
        return ['texas', 'ohio'];
    }

    intro () {
        return ` I'm ${this.name}` `${this.politicalSide}`
    }

}

class Candidate extends Governor {

    constructor (name, politicalSide, state) {
       super(name, politicalSide)
       this.state = state;
    }
}

let bob = new Candidate('bob johnson', 'independant',Governor.backGround()[1]);
console.log(bob);



