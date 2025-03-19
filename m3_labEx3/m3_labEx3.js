// ----- Module 3: Lab Exercises 3 -----

console.log("----- Exersise 1: Function Closure -----");

function makeCounter() {
  let currentCount = 0;

  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

let counter1 = makeCounter();

counter1(); // 1
counter1(); // 2

//a) counter2
let counter2 = makeCounter();
console.log("counter2");
counter2();
counter2();
counter1();
//counter2 remains independent to counter1.

//b) makeCounter2() with extra argument startFrom.
function makeCounter2(startFrom) {
  //The variable that works as a counter will have a value equal to the argument passed.
  //If the argument is not a number so currentCount is 0.
  let currentCount = 0;
  typeof startFrom === "number" ? (currentCount = startFrom) : currentCount;

  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

//counter3 starting with 5 (number).
let counter3 = makeCounter2(5);
console.log("counter3");
counter3();
counter3();

//counter4 starting with a string.
let counter4 = makeCounter2("abc");
console.log("counter4");
counter4();
counter4();

//c) makeCounter3() with extra argument incrementBy.
function makeCounter3(startFrom) {
  // The variable that acts as a counter will have a value equal to the argument passed.
  // If the argument is not a number, then currentCount will be 0.
  let currentCount = 0;
  typeof startFrom === "number" ? (currentCount = startFrom) : currentCount;

  return function (incrementBy) {
    //If the argument passed is not a number so currentCount++.
    typeof incrementBy === "number"
      ? (currentCount += incrementBy)
      : currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

//counter3 starting with 5 (number).
let counter5 = makeCounter3(1);
console.log("counter5");
counter5(200);
counter5(-100);

//-----------------------------------------------------------------

console.log("\n\n----- Exersise 2: setTimeout() -----");

function delayMsg(msg) {
  console.log(`This message will be printed after a delay: ${msg}`);
}

let delay100 = setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
let delay20 = setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
let delay0 = setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

//a) What order will the four tests below print in? Why?
//setTimeout() is a asynchronous function schedules the execution of a callback function after a specified delay.
//Because it's assynchronous, the first item to be printed will be #4, which executes a synchronous method console.log().
//The second will be #3, which has a shorter delay of 0 milliseconds , meaning it runs just after #4.
//In sequence, #2 will be printed with a delay of 20 miliseconds.
//And the last to be printed will be #1 with a delay of 100 miliseconds.

//b) arrow function:
const delayMsgArrow = (msg) => console.log(`delayMsgArrow prints: ${msg}`);

delayMsgArrow("test 1");

//c) 10 seconds delay test:
let tenSecondsTest = setTimeout(delayMsgArrow, 10000, "test 2 (10 seconds)");

//d) clearTimeout:
clearTimeout(tenSecondsTest);
clearTimeout(delay100);
clearTimeout(delay20);
clearTimeout(delay0);

//-----------------------------------------------------------------

console.log("\n\n----- Exersise 3: debounce() -----");

//a) Debounce function:
function debounce(func) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, 1000);
  };
}

let func = () => console.log("Debounce test.");
let debounceFunc = debounce(func);

// debounceFunc();
// debounceFunc();
// debounceFunc(); //It will be the only one to be executed, and it will run after 1 second.

//b) Second argument ms:
function debounce2(func, ms) {
  let timer;

  return function () {
    clearTimeout(timer);
    timer = setTimeout(func, ms);
  };
}

let func2 = () => console.log("Debounce2 test.");
let debounceFunc2 = debounce2(func2, 2000);

//debounceFunc2();
//debounceFunc2();
//debounceFunc2(); //It will be the only one to be executed, and it will run after 2 second, as passed to debounce2() as an argument.

//c) printMe(msg):

function debounce3(func, ms = 1000) {
  let timer;

  return function (msg) {
    clearTimeout(timer);
    timer = setTimeout(() => func(msg), ms);
  };
}

let printMe = (msg) => console.log(msg);
let debounceFunc3 = debounce3(printMe, 3000);
let msg = "Debounce3 test.";

//debounceFunc3(msg);
//debounceFunc3(msg);
//debounceFunc3(msg); //It will be the only one to be executed, and it will run after 3 second, as passed to debounce3() as an argument.

//-----------------------------------------------------------------

console.log("\n\n----- Exersise 4: Fibonacci -----");

//a) printFibonacci() with setInterval
let count = 0,
  fibonacci = 1,
  lastFibonacci = 0;

function printFibonacci() {
  let temp = fibonacci;

  count < 10 ? console.log(fibonacci) : clearInterval(interval);

  fibonacci = fibonacci + lastFibonacci;
  lastFibonacci = temp;
  count++;
}

//let interval = setInterval(printFibonacci, 1000);

//b) printFibonacciTimeouts()
function printFibonacciTimeouts(count = 0, fibonacci = 1, lastFibonacci = 0) {
  console.log(fibonacci);

  count < 10
    ? setTimeout(
        () =>
          printFibonacciTimeouts(
            count + 1,
            fibonacci + lastFibonacci,
            fibonacci
          ),
        1000
      )
    : null;
} //printFibonacciTimeouts();

//c) limitFibonacci()
function limitFibonacci(limit, count = 0, fibonacci = 1, lastFibonacci = 0) {
  console.log(fibonacci);
  //console.log(`limit is ${limit}, count is ${count}, fibonacci is ${fibonacci}, lastFibonacci is ${lastFibonacci}, `);

  count <= limit
    ? setTimeout(
        () =>
          limitFibonacci(
            limit,
            count + 1,
            fibonacci + lastFibonacci,
            fibonacci
          ),
        500
      )
    : null;
} //limitFibonacci(20);

//-----------------------------------------------------------------

console.log("\n\n----- Exersise 5: setTimeout() & bind -----");

//a) Fix setTimeout():
console.log("\na)");
let car = {
  make: "Porsche",
  model: "911",
  year: 1964,

  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

car.description(); //works
//setTimeout(() => car.description(), 200);
//The setTimeout method calls the callback function after 200 milliseconds, and the callback function calls car.description() and executes it (with ())

//b) Change year:
console.log("\nb)");
const carClone = { ...car }; //spread operator
carClone.year = 1988; //change property's value

carClone.description();
car.description();

//c) Delayed description():
//The delayed description calls the original year becase it has reference to car and not carClone.

//d) bind():
console.log("\nd)");
//setTimeout(() => car.description.bind(carClone)(), 0);

//e) Change make:
console.log("\ne)");
const carClone2 = { ...car }; //spread operator
carClone2.make = "kia"; //change property's value
carClone2.description();
//It still uses the bound value from d).

//-----------------------------------------------------------------

console.log("\n\n----- Exersise 6: prototype -----");

//a) prototype:
console.log("\na)");

function multiply(a, b) {
  console.log(a * b);
}

//I add a prototype method to Function called delay.
//This method gets/send a ms argument and return a function that gets other arguments
//and execute a seTimeout with ms being the delay and the callback calls the function sendint the arguments.
Function.prototype.delay = function (ms) {
  return (...args) => setTimeout(() => this(...args), ms);
};

//multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//b) apply():
console.log("\nb)");

//In this case apply woul make the diference it multiply didnt need a specific set of arguments, like function multiply(...numbers)
Function.prototype.delay2 = function (ms) {
  return (...args) => setTimeout(() => this.apply(this, args), ms);
};

//multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//c) apply():
console.log("\nc)");

//In this function I get as many arguments are sent and put them in an array with the (...number).
//Then I use reduce to multiply them.
function multiply2(...numbers) {
  console.log(numbers.reduce((a, b) => a * b, 1));
}

//multiply2.delay(500)(5, 5, 5, 5);

//-----------------------------------------------------------------

console.log("\n\n----- Exersise 7: classes -----");

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;
    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

// const myClock = new DigitalClock('my clock:')
// myClock.start()

//a) PrecisionClonck:
console.log("\na)");

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix);
    this.precision = precision;
    console.log("AlarmClock precision:", this.precision); // Debugging line
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

// const myPrecisionClock = new PrecisionClock('My Precision Clock:', 2000)
// myPrecisionClock.start()

//b) AlarmClock:
console.log("\nb)");

class AlarmClock extends DigitalClock {
  constructor(prefix, precision = 1000, wakeupTime = "07:00") {
    super(prefix);
    this.precision = precision;
    console.log("AlarmClock precision:", this.precision); // Debugging line
    this.wakeupTime = wakeupTime;
  }

  display() {
    let date = new Date();
    let alarm = this.wakeupTime.split(":").map(Number);
    //create 3 variables in one go using array destructuring
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    if (this.isValidWakeupTime(this.wakeupTime)) {
      if (alarm[0] === date.getHours() && alarm[1] === date.getMinutes()) {
        console.log(
          `${this.prefix} ${hours}:${mins}:${secs}\nTime to Wake Up!`
        );
        this.stop();
      } else {
        console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
      }
    } else {
      throw console.log("Alam format is invalid.");
    }
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }

  isValidWakeupTime(wakeupTime) {
    return /^([01]\d|2[0-3]):[0-5]\d$/.test(wakeupTime);
  }
}

// const myAlarmClock = new AlarmClock('Test Clock:', 5000, '16:17')
// myAlarmClock.start()

//-----------------------------------------------------------------

console.log("\n\n----- Exersise 8: decorator function -----");

function orderItems(itemName) {
  return `Order placed for: ${itemName}`;
}

//a) validateStringArg(fn):
console.log("\na)");

function validateStringArg(fn) {
  return function (value) {
    if (typeof value === "string") {
      return fn(value);
    } else {
      throw console.log("The value is not a string.");
    }
  };
}

// create a decorated version of the original function
const validatedOrderItem = validateStringArg(orderItems);

console.log(validatedOrderItem("Apple Watch")); // should run the function
//console.log(validatedOrderItem(333)); // should throw an error

//b and c) orderItems2(...itemName):
console.log("\nb) and c)");

function orderItems2(...itemName) {
  return `Order placed for: ${itemName}`;
}

function validateStringArg2(fn) {
  return function (...value) {
    //validate all arguments passed.
    for (let i of value) {
      if (typeof i !== "string") {
        throw new Error(`Argument "${i}" is not a string`);
      }
    }

    return fn(...value);
  };
}

// create a decorated version of the original function
const validatedOrderItem2 = validateStringArg2(orderItems2);

console.log(validatedOrderItem2("Apple Watch", "Iphone")); // should run the function
//console.log(validatedOrderItem2("Apple Watch", "Iphone", 333)); // should throw an error

//d) try catch:
try {
  console.log(validatedOrderItem2("Apple Watch", "Iphone")); // should run the function
} catch (error) {
  console.error(error.message);
}

try {
  console.log(validatedOrderItem2("Apple Watch", "Iphone", 333)); // should throw an error
} catch (error) {
  console.error(error.message);
}

//-----------------------------------------------------------------

console.log("\n\n----- Exersise 9: promise() -----");

//a) randomDelay():
console.log("\na)");

function randomDelay() {
  let delay = Math.round(Math.random() * 20000 + 1000);

  return new Promise((resolve) => {
    setTimeout(() => resolve(delay / 1000), delay);
  });
}

//randomDelay()
//  .then(delay => console.log('There appears to have been a delay of ', delay, " sec"));

//b and c) and d) randomDelay2():
console.log("\nb) and c) and d)");

function randomDelay2() {
  let delay = Math.round(Math.random() * 20000 + 1000);

  return new Promise((resolve, reject) => {
    if (delay % 2 === 0) {
      setTimeout(
        () => resolve(`Delay is even and equal to ${delay} ms`),
        delay
      );
    } else {
      reject(`Delay is odd and equal to ${delay / 1000} sec`);
    }
  });
}

// randomDelay2()
//     .then(message => console.log(message))
//     .catch(error => console.error("Error: ", error));

//-----------------------------------------------------------------

console.log("\n\n----- Exersise 10: retch(), async/await -----");

//a) fetch() asyn/await:
console.log("\na)");

// import fetch from "node-fetch";
// globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    let response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed - Status ${response.status}`);
    }

    let responseBody = await response.json(); //extract the useful part (for this exercise) of the response
    console.log(responseBody);
  } catch (error) {
    console.error(error.message);
  }
}

// fetchURLData("https://jsonplaceholder.typicode.com/todos/1"); //resolved
// fetchURLData("https://jsonplaceholder.typicode.com/todos/invalid"); //rejected
// fetchURLData("https://error"); //DNS failed

//b) fetch():
console.log("\nb)");


function fetchURLData2(url) {
  let fetchPromise = fetch(url).then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  });
  return fetchPromise;
}

// fetchURLData2("https://jsonplaceholder.typicode.com/todos/1") //resolved
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));
// fetchURLData2("https://jsonplaceholder.typicode.com/todos/invalid") //rejected
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));
// fetchURLData2("https://error") //DNS failed
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error.message));

  //c) fetch() - url array:
console.log("\nc)");

async function fetchMultipleURLs(urls) {
    try{
        const fetchPromises = urls.map(url => fetch(url).then(response => {
            if (!response.ok) {
                throw new Error (`Request failed for ${url} - Status: ${response.status}`)
            }
            return response;
        })); //I will have a array of Promises. I also check if the URL is ok (status 200), if not I will throw an error.

        const responses = await Promise.all(fetchPromises); 
        //Promise.all() takes an array of promises (fetchPromises) and returns a single promise.
        //If all promises are resolved, it will resolve with an array of their resolved values.
        //If any of the promises is rejected, it will immediately reject with the reason of the first rejected promise.


        //Extract the useful part (for this exercise) of the response
        const dataPromises = responses.map(response => response.json());

        //.json() is an asynchronous operation, so it returns a promise.
        //Since map() creates an array of promises, I used await to ensure all promises are resolved before proceeding.
        //and get the array of resolved JSON data.       
        const data = await Promise.all(dataPromises);

        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
}
const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
];

const urls2 = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/error'
];

const urls3 = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://error'
];

fetchMultipleURLs(urls); //resolved
fetchMultipleURLs(urls2); //reject
fetchMultipleURLs(urls3); //reject