// ----- Module 3: Lab Exercises 2 -----

console.log("----- Exersise 1: String Manipulation -----");
let ucFirstLetters = function(string) {
    //First, I split the string into chunks separated by a single space and create a array with each chunk (all this using .split(" ")).
    //Second, I use .map() to create a new array with elements form the previous array created by split() modified by the callback function.
    //Third, I use replace() in the call back function, with a regular expression // and function for replacement.
    //Regular expression: ^ (start of the string -> index 0) and . (any character), what means it gets the first character of each element/string.
    //Function for replacement: It gets this character and use .toUpperCase() to make it capital letter.
    //and Forth and final step, I use .join(" ") to join the array elements and add a single space in between them.
    //I return all this to the function expression.
    return string.split(" ")
        .map(string => string.replace(/^./, (match) => match.toUpperCase()))
        .join(" ");
};
console.log(ucFirstLetters("first Example"));
console.log(ucFirstLetters("second example"));
console.log(ucFirstLetters("Third Example"));


//-----------------------------------------------------------------


console.log("\n\n----- Exersise 2: String Manipulation -----");
let truncate = function(str,max) {
    //First, I use .length to get the length of the string and compare with the attribute max (maximum number of characters).
    //Second, if the condition returns true, I use .slice() to grab the chunk of text deffined by the attribute max ((maximum number of characters)
    //concatenate the ellipsis (...) and return it.
    //Third, if the condition returns false, I simply return the string as it is.
    return (str.length > max) ? 
        (str.slice(0,max) + "...") :
        str;
};
console.log(truncate("123456789123456789", 10));
console.log(truncate("1234567891", 10));


//-----------------------------------------------------------------


console.log("\n\n----- Exersise 3: Array Methods -----");
const animals = ['Tiger', 'Giraffe']
console.log(animals)

//a) Add 2 new values to the end with array method push().
animals.push("Kangaroo","Cat");
console.log(animals)

//b) Add 2 new values to the beginning with array method unshift().
animals.unshift("Horse","Cow");
console.log(animals)

//c) Sort the values alphabetically with array method sort() 
// withought a compareFunction() because it will just follow the alphabetical order. 
animals.sort();

//d) function replaceMiddleAnimal(): I will use direct assignment combined with Math.round and length to find the middle.
const replaceMiddleAnimal = function (arr, newAnimal) {
    arr[Math.round((arr.length-1)/2)] = newAnimal;
    return arr
}
console.log(replaceMiddleAnimal(animals, "Salmon"));


//-----------------------------------------------------------------


console.log("\n\n----- Exersise 4: String Methods -----");

//a) Function camleCase(cssProp)
let camelCase = function(cssProp) {
    // First, I used .split() to create an array with all the elements separated by a dash (-).
    // Second, I applied modifications to the elements of this array with .map().
    // In the .map() method, I passed both the value and its index as parameters, so I could skip the first element.
    // Third, for the other values (strings), I took the first character, made it uppercase,
    // and concatenated it with the rest of the string using .concat() and .slice() starting at index 1.
    // Fourth, I joined all the elements with .join() without applying any separator.
    return cssProp.split("-")
        .map((str, index) => {
            if (index !== 0) {
                return str.charAt(0).toUpperCase().concat(str.slice(1));
            } else {
                return str;
            }
        })
        .join("");
};
console.log(camelCase('margin-left-test'))

//b and c) Function camleCase(cssProp) with loops
// for loop (without conditional)
// In this function, I also created an array with all the elements separated by a dash (-).
// The for loop has a loop index starting at 1, which allows me to work on each element of the array,
// skipping the first one (index 0).
// For each element, I perform the same procedure as before, and once the loop finishes, I join the elements into a string and return it.
let camelCase2 = function(cssProp) {
    const arr = cssProp.split("-");

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase().concat(arr[i].slice(1));
    }

    return arr.join("");
};
console.log(camelCase2('margin-left-test'))

//for...of (with conditional)
// In this function, using the for...of loop, I applied the same principle of creating an array from the string.
// Additionally, I created a new array holding the value of the first element of the original array,
// along with an index for the loop.
// I used the for...of loop to modify the strings as before and push them into the new array.
// Once the loop finishes, I join the elements into a string and return it.let camelCase3 = function(cssProp) {
let camelCase3 = function(cssProp) {
    const arr = cssProp.split("-");
    const newArr = [arr[0]];
    let i = 0;

    for (let str of arr) {
        str = str.charAt(0).toUpperCase().concat(str.slice(1));
        if (i !== 0) newArr.push(str);
        i++;
    };

    return newArr.join("");
}
console.log(camelCase3('margin-left-test'))

//forEach() (with conditional)
//Same as the previous example but using the array method .forEach().
let camelCase4 = function(cssProp) {
    const arr = cssProp.split("-");
    const newArr = [arr[0]];
    let i = 0;

    arr.forEach((str) => {
        str = str.charAt(0).toUpperCase().concat(str.slice(1));
        if (i !== 0) newArr.push(str);
        i++;
    });

    return newArr.join("");
}
console.log(camelCase4('margin-left-test'))


//-----------------------------------------------------------------


console.log("\n\n----- Exersise 5: Number Methods -----");

let twentyCents = 0.20
let tenCents = 0.10
//console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
//console.log(fixedTwenty + fixedTen) //why is this not working?

//a) Number Method .toFixed()
//It happens because JavaScript uses floating-point arithmetic to represent decimal number.
//This require a infinite series of binary fractions. However, computers have to stop this number after
//a fixed number of bits, which introduces this approximation error.

//b) function currencyAddition (float1, float2)
// I multiplied the floating-point numbers by 100 because currency normally works with two decimal places,
// so the numbers became integers. After that, I added them and divided by 100 to convert back to a floating-point number.
let currencyAddition = function(float1, float2) {
    return (Math.round(float1 * 100) + Math.round(float2 * 100))/100;
};
console.log(0.3 == currencyAddition(0.1, 0.2));

//c) currencyOperation (float1, float2, operation)
let currencyOperation = function(float1, float2, operation) {
    switch (operation) {
        case "+":
            return currencyAddition(float1, float2);
            break;
        case "-":
            return currencySubtraction(float1, float2);
            break;
        case "*":
            return currencyMultiplication(float1, float2);
            break;
        case "/":
            return currencyDivision(float1, float2);
            break;
        default:
            console.log("Please enter an operator.")
    }
};

let currencySubtraction = function(float1, float2) {
    return (Math.round(float1 * 100) - Math.round(float2 * 100))/100;
};

let currencyMultiplication = function(float1, float2) {
    return (Math.round(float1 * 100) * Math.round(float2 * 100))/10000;
};

let currencyDivision = function(float1, float2) {
    return Math.round((float1 / float2) * 100) / 100;
};
console.log("Testes currencyOperation():");
console.log(0.3 == currencyOperation(0.1, 0.2, "+"));
console.log(-0.1 == currencyOperation(0.1, 0.2, "-"));
console.log(0.02 == currencyOperation(0.1, 0.2, "*"));
console.log(0.5 == currencyOperation(0.1, 0.2, "/"));

//d) forth argument numDecimals
let currencyOperation2 = function(float1, float2, operation, numDecimal = 100) {
    let pow = numDecimal;
    if (numDecimal !== 100) pow = Math.pow(10, numDecimal);

    switch (operation) {
        case "+":
            return (Math.round(float1 * pow) + Math.round(float2 * pow)) / pow;
            break;
        case "-":
            return (Math.round(float1 * pow) - Math.round(float2 * pow)) / pow;
            break;
        case "*":
            return (Math.round(float1 * pow) * Math.round(float2 * pow)) / (pow*pow);
            break;
        case "/":
            return Math.round((float1 / float2) * pow) / pow;
            break;
        default:
            console.log("Please enter an operator.")
    }
};
console.log("Testes currencyOperation2():");
console.log(0.3 == currencyOperation2(0.1, 0.2, "+"));
console.log(-0.0777746 == currencyOperation2(0.14567885, 0.22345345, "-", 8));
console.log(0.0375 == currencyOperation2(0.15, 0.25, "*", 2));
console.log(0.5 == currencyOperation2(0.1, 0.2, "/", 1));


//-----------------------------------------------------------------


console.log("\n\n----- Exersise 6: Unique values -----");

//I created a set with the unique values of the array passed as an argument 
// and returned them as an array.
function unique(duplicatesArray) {
    return [...new Set(duplicatesArray)];
}
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]


//-----------------------------------------------------------------


console.log("\n\n----- Exersise 7:  -----");

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

//a) function getBookTitle (bookId)
//I created a function getBookArr() to receive the books array
//Inside it, I created a closure function getBookTitle() that uses find() to get the matching element.
//Finally, it returns the title.
function getBookArr(bookStore) {
    return function getBookTitle(bookId) {
        const book = bookStore.find((book) => book.id === bookId);
        return book.title;
    };
};
let bookTitle = getBookArr(books);
console.log(bookTitle(3));


//-----------------------------------------------------------------


console.log("\n\n----- Exersise 8: Map() Data Structure -----");

const phoneBookABC = new Map()
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a) phoneBookDEF Map():
const phoneBookDEF = new Map();

//b) Initialising phoneBookDEF Map():
// I used a forEach() to go through each element of the array and assign them to phoneBookDEF.
const contactDEF = [
    ["Dalmir", "0410088843"],
    ["Eduard", "0434987456"],
    ["Fiona", "0436985236"]
]

const contactMNO = [
    ["Marcus", "0410088843"],
    ["Noe", "0434987456"],
    ["oliver", "0436985236"]
]

function addContactDEF(arr) {
    let rejectedContacts = [];

    arr.forEach((element) => {
        //I added this conditional inside the forEach() to check if the names start with DEF.
        if (['D', 'E', 'F'].includes(element[0].charAt(0).toUpperCase())) {
            phoneBookDEF.set(element[0], element[1]);
        } else {
            //The names that do not start with DEF are adde to an array.
            rejectedContacts.push(element[0]);
        }
    });
    //Message depending on the rejected contacts.
    let msg = (rejectedContacts.length === 0) ?
        "Thanks, all contacts were added." :
        `Sorry, but the following contacts were not added: ${rejectedContacts.join(", ")}`;

    console.log(msg);
}

addContactDEF(contactDEF)
addContactDEF(contactMNO)

//c)Update phone:
//phoneUpdater() has an inner closure function that has a condition checking if the map contains the provided name.
//If the name exists, I use .set() for updating the phone.
//Messages are logged depending on the final result.
function phoneUpdater(map) {
    return function (name, newPhone) {
        if (map.has(name)) {
            map.set(name, newPhone);
            console.log(`${name}'s new phone number updated.`)
        } else {
            console.log(`${name} not found.`)
        }
    }
}
let updatePhone = phoneUpdater(phoneBookABC);

updatePhone("Carolina", "012345");
updatePhone("Caroline", "012345");
console.log(phoneBookABC);

//d) printPhoneBook()
//I used for... of in the map provided by the function and created a message with the keys and values.
function printPhoneBook(contacts) {
    let msg = "";
    if (contacts.size !== 0) {
        msg = "The contact list is:"
        for (let [key, value] of contacts) {
            msg += `\n${key}: ${value}`;
        };
    } else {
        msg = "This contact list is empty."
    }
    console.log(msg);
}

printPhoneBook(contactDEF);

//e) Combining Maps
//I created a function that return a map with the content of other two maps provided.
function combinePhoneBook(book1, book2) {
    const newMap = new Map();

    for (let [key, value] of book1) {
        newMap.set(key, value);
    };

    for (let [key, value] of book2) {
        newMap.set(key, value);
    };

    return newMap;
}
const contactABCDEF = combinePhoneBook(phoneBookABC,contactDEF);
console.log(contactABCDEF);

//f) Printing 
printPhoneBook(contactABCDEF);



//-----------------------------------------------------------------


console.log("\n\n----- Exersise 9: Object Methods -----");

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
};

//a) sumSalaries()
// I used Object.values to create an array of the salaries
// and used the array method .reduce() to sum them,
// then I returned its value.
function sumSalaries(salaries) {
    return Object.values(salaries)
        .reduce((acc, salarie) => acc + salarie, 0);
};

console.log(sumSalaries(salaries));

//b)topEarner(salaries)
// I used Object.values to create an array of the salaries
// and used sort() to sort the salaries in descending order.
// Then I applied [0] to return the first (higher) value as a number.
function topEarner(salaries) {
    return Object.values(salaries)
    .sort((a, b) => b - a)
    [0];
}
console.log(topEarner(salaries));



//-----------------------------------------------------------------


console.log("\n\n----- Exersise 10: Date() Object -----");

const today = new Date();
console.log(today);

//getTimezoneOffset() will calculate the UTC - OFFSET wich gives a negative value for the time ahead of UTC (London)
console.log(`The difference between UTC and the local time in minutue is: ${today.getTimezoneOffset()}`);

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//getDay() returns a number from 0 to 6 where Sunday is 0.
//getMonth() returns a number form 0 to 11 where January is 0.
//getFullYear() returns the year with 4 digits.
console.log(`Today is ${dayNames[today.getDay()]}, ${monthNames[today.getMonth()]} ${today.getFullYear()}`);

console.log('Current time is ' + today.toLocaleTimeString());
console.log(today.getHours() + ' hours have passed so far today');

//a) Print the total number of minutes that have passed so far today:
//I get the hours, multiply them by 60 min, and then add the minutes.
let totalMinutes = today.getHours() * 60 + today.getMinutes();
console.log(`${totalMinutes} minutes have passed so far today`);

//b) Print the total number of seconds that have passed so far today:
//I get the hours, multiply them by 3600 (60 min * 60 sec), and then add the minutes multiplied by 60 sec.
let totalSeconds = today.getHours() * 3600 + today.getMinutes() * 60;
console.log(`${totalSeconds} seconds have passed so far today`);

//c) Age printing:
//Date(year, monthIndex, day)
const birthday = new Date(1991, 9, 3);
console.log(birthday);

let printBirthday = dayNames[birthday.getDay()] + " " + birthday.getDate() + ", " + monthNames[birthday.getMonth()] + " " + birthday.getFullYear();
console.log(`My birthday is ${printBirthday}`);

// I made three different approaches to this problem in order to find the best execution time.
//Method 1) Object-oriented approach using interdependent object methods.
let age = {
    msAge: today - birthday,
    msDay: 24 * 60 * 60 * 1000,

    msYear() {
        return 365.25 * this.msDay;
    },
    
    msMonth() {
        return 30.44 * this.msDay;
    },

    years() {
        return Math.floor(this.msAge / this.msYear());
    },

    months() {
        return Math.floor((this.msAge % this.msYear()) / this.msMonth());
    },

    days() {
        return Math.floor(((this.msAge % this.msYear()) % this.msMonth()) / this.msDay);
    },

    getAge: function() {
        console.log(`I am ${this.years()} years, ${this.months()} months and ${this.days()} days old.`);
        return [this.years(), this.months(), this.days()];
    }
};

console.time("Method 1");
        age.getAge()
        // let myAge = age.getAge();
        // console.log(myAge);
console.timeEnd("Method 1");

//Method 2) Object-oriented approach using interdependent object methods and direct calculation)
let age2 = {
    years() {
        return Math.floor((today - birthday) / (365.25 * 24 * 60 * 60 * 1000));
    },

    months() {
        return Math.floor(((today - birthday) % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    },

    days() {
        return Math.floor((((today - birthday) % (365.25 * 24 * 60 * 60 * 1000)) % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
    },

    getAge: function() {
        console.log(`I am ${this.years()} years, ${this.months()} months and ${this.days()} days old.`);
        return [this.years(), this.months(), this.days()];
    }
};

console.time("Method 2");
        age2.getAge()
console.timeEnd("Method 2");

//Method 3) Function definition
function age3() {
    let msAge = today - birthday,
        msDay = 24 * 60 * 60 * 1000;

    let msYear = 365.25 * msDay,
        msMonth = 30.44 * msDay;
    
    let years = Math.floor(msAge / msYear),
        months = Math.floor((msAge % msYear) / msMonth),
        days = Math.floor(((msAge % msYear) % msMonth) / msDay);
    

    console.log(`I am ${years} years, ${months} months and ${days} days old.`);
    return [years, months, days];

}

console.time("Method 3");
        age3()
console.timeEnd("Method 3");

//c)daysInBetween(date1, date2)
//I created a function that convert both dates to UTC time in milliseconds,
//calculate the difference between date 1 and date2 and return the value in days between them.
function daysInBetween(date1, date2) {
    let date1UTC = new Date(date1),
        date2UTC = new Date(date2);

    return (date1UTC - date2UTC) / (24 * 60 * 60 * 1000)
}

console.log(daysInBetween("2025-04-11", "2025-03-01"));