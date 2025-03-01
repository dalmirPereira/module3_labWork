// ----- Module 3: Lab Exercises 1 -----

console.log("----- Exersise 1: JavaScript type coercion -----");
"" + 1 + 0 //"10": String + Number converts the Number to String and concatenate.
console.log("aaaa" + 1 + 0);
"" - 1 + 0 //-1: The empty string or white space followed by - becomes 0. If it is a string it will not convert and it will be NaN.
console.log("" - 1 + 0);
true + false //1: true is equal to 1 and false is equal to 0 when added.
console.log(true + false);
!true //"false": Simple logical not operator (not true = false).
console.log(!true);
6 / "3" //2: The number-string become number in division. If it's a string it will be a NaN.
console.log(6 / "3");
"2" * "3" //6: Both number-string become number in multiplication. If it's a string it will be a NaN.
console.log("2" * "3");
4 + 5 + "px" //"9px": number + string become string
console.log(4 + 5 + "px");
"$" + 4 + 5 //"$45": string + number becomes string
console.log("$" + 4 + 5);
"4" - 2 //2: Number-string followed by - become a number. If it is followed by + it will continue as string and the number added will become a string.
console.log("4" - 2);
"4px" - 2 //NaN: String can't be converted to number.
console.log("4px" - 2);
" -9 " + 5 //"-9 5": String followed by + will continue as string and the number add will become a string.
console.log(" -9 " + 5);
" -9 " - 5 //-14: Number-string followed by - become a number.
console.log(" -9 " - 5);
null + 1 //1: null has no value (equal 0)
console.log(null + 1);
undefined + 1 //NaN: undefined is not a number and cannot be converted to a meaningful.
console.log(undefined + 1);
undefined == null //true: Empity values
console.log(undefined == null);
undefined === null //false: Different types.
console.log(undefined === null);
" \t \n" - 2 //-2: The empty string or white space followed by - becomes 0. If it is a string it will not convert and it will be NaN.
console.log(" \t \n" - 2);



console.log("\n\n----- Exersise 2: JavaScript type coercion -----");
let three = "3"
let four = "4"
let thirty = "30"
//what is the value of the following expressions?
let addition = three + four //"34"
console.log(addition);
let multiplication = three * four //12
console.log(multiplication);
let division = three / four //0.75
console.log(division);
let subtraction = three - four //-1
console.log(subtraction);
let lessThan1 = three < four //true: javascript compare lexicographic and 3 comes first than 4.
console.log(lessThan1);
let lessThan2 = thirty < four //true: javascript compare lexicographic the firsts character and 3 comes first than 4.
console.log(lessThan2);



console.log("\n\n----- Exersise 3: JavaScript type coercion -----");
if (0) console.log('#1 zero is true') //0 is false: The message wont be printed.
if ("0") console.log('#2 zero is true') //Non-empty string is true: The message will be printed.
if (null) console.log('null is true') //null is false: The message wont be printed.
if (-1) console.log('negative is true') //all non-zero numbers are true: The message will be printed.
if (1) console.log('positive is true') //1 is true: The message will be printed.



console.log("\n\n----- Exersise 4: JavaScript type coercion -----");
let a = 2, b = 3;
let result = `${a} + ${b} is `;
// if (a + b < 10) {
// result += 'less than 10';
// } else {
// result += 'greater than 10';
// }
// ----- Ternary operator -----
(a + b <10) ? result += 'less than 10' : result += 'greater than 10';
// the += means variable + value. It means the variable will add the value to itself.
console.log(result);




console.log("\n\n----- Exersise 5: Function Expression and Arrow Function -----");
// function getGreeting(name) {
//     return 'Hello ' + name + '!';
// }
// ----- a) Function Expression -----
let test = "test";
let greater = function(name) {
    return 'Hello ' + name + '!';
}
console.log(greater(test));
// ----- a) Function Syntax -----
let greater2 = (name) => {return 'Hello ' + name + '!';}
console.log(greater2(test));




console.log("\n\n----- Exersise 6: Object Method -----");
const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}
const inigo = {
    firstName: 'Inigo',
    lastName: 'Montoya',
    greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
    },
    getCatchPhrase: (person) => {
        return (person.numFingers === 6) 
            ? "You killed my father. Prepare to die" 
            : 'Nice to meet you.';
    }
}
inigo.greeting(westley);
inigo.greeting(rugen);



console.log("\n\n----- Exersise 7: Object Method -----");
const basketballGame = {
    score: 0,
    foul: 0,
    foulText: "",
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this;
    },
    threePointer() {
        this.score += 3;
        return this;
    },
    countFoul() {
        this.foul++;
        return this;
    },
    halfTime() {
        (this.foul === 0 || this.foul === 1) ? this.foulText = "foul is" : this.foulText = "fouls are";
        console.log(
            `Halftime: Score is ${this.score} and ${this.foulText} ${this.foul}`
        );
    },
    fullTime() {
        (this.foul === 0 || this.foul === 1) ? this.foulText = "foul is" : this.foulText = "fouls are";
        console.log(
            `FullTime: Score is ${this.score} and ${this.foulText} ${this.foul}`
        );
    }
}
//modify each of the above object methods to enable function chaining as below:
//basketballGame.basket().freeThrow().freeThrow().basket().threePointer().halfTime();
//a) It was missing the return this;. Without it the functions can not chain.
//b) Method fulltime() created.
//c) New object properties added: foul and foulText. Method countFoul() added 
//   and Methods halfTime() and fullTime() updated.
//d) Tests:
//Test 1: Half time and one foult.
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().countFoul().halfTime();
//Test 2: Full time and zero foult.
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().fullTime();
//Test 3: Half time and two foults.
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().countFoul().halfTime();
//Test 4: Full time and three foults.
basketballGame.basket().freeThrow().freeThrow().basket().threePointer().countFoul().fullTime();



console.log("\n\n----- Exersise 8: Object For...In Loop -----");
const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}
const melbourne = {
    name: 'Melbourne',
    population: 5_300_000,
    state: 'VIC',
    founded: '30 August 1835',
    timezone: 'Australia/Melbourne'
}

const printCity = (city) => {
    for (let key in city){
        console.log(`${key} : ${city[key]}`);
    };

    //other option using forEach() method.
    // Object.keys(city).forEach(key => {
    //     console.log(`${key} : ${city[key]}`);
    // });
}

printCity(sydney);
printCity(melbourne);



console.log("\n\n----- Exersise 9: Object Clonning  -----");
let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };
//a) moreSports created and three more sports added.
let moreSports = [...teamSports];
moreSports.push("Football", "Basketball", "Surf");
console.log(teamSports)
console.log(moreSports);
//b) dog2 created and name changed.
let dog2 = dog1;
dog2 = "Red";
console.log(dog1);
console.log(dog2);
//c) cat2 created and property name changed.
const cat2 = {...cat1};
cat2.name = "Snow Ball";
console.log(cat1);
console.log(cat2);



console.log("\n\n----- Exersise 10: Object  -----");
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;

    //e) method added.
    this.canDrive = function() {
        let text = this.name;
        (this.age >= 18) ? text +=" can drive." : text +=" cannot drive.";
        console.log(text);
    }
}
//a) firstPerson created.
let firstPerson = new Person("Dalmir",33);
console.log(firstPerson);
firstPerson.canDrive();
//b) secondPerson created.
let secondPerson = new Person("Rimlad",34);
console.log(secondPerson);
secondPerson.canDrive();
//d) PersonClass class and thirdPerson
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }

    //e) method added.
    canDrive() {
        let text = this.name;
        (this.age >= 18) ? text +=" can drive." : text +=" cannot drive.";
        console.log(text);
    }
}
let thirdPerson = new Person("Romeu",17);
console.log(thirdPerson);
thirdPerson.canDrive();
