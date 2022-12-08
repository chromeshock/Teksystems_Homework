/*let num = -40;

if (num >=0 && num >100) {
    console.log(num, "is positive")
} else {
    if (num >=0 && num <100) 
        console.log(num, "is positive and under 100")
    if (num < 0) {
        console.log(num, "is a negative number")
    }
}
*/
/*studentGrade = 0;

if (studentGrade >=90) {
    console.log("You got an A")
    } else if (studentGrade >=80) {
        console.log("You got a B")
       }   else if (studentGrade >=70) {
            console.log("You got a C")
       }    else if (studentGrade >=55) {
        console.log("You got a D")
       } else if (studentGrade <=55) {
            console.log("You got a F")
    } */

/* for (let i = 1; i < 10; i = i + 2) {
    console.log(i);
}*/

/*for (let i = 6; i < 60; i = i * 3) {
    console.log(i);
}*/

let films =["Terminator", "Alien", "Highlander"];
let firstFilm = films[0];
console.log(firstFilm);
films.push("Spider Man", "Avatar");
console.log(films);

let film = films.pop();
console.log(films);

film = films.shift();
console.log(films);

let removedFilms = films.splice(1, 1, "Aliens 3", "Spaceballs", "Highlander");
console.log(films);

films.forEach(function (film) {
    console.log(film);
});