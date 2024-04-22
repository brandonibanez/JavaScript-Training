'use strict';

function func1() {
    let js = 'amazing';
    console.log(40 + 8 + 23 - 10);
    console.log("Brandon");

    let firstName = "Ivan";

    console.log(firstName);

    let person = "Brandon " + firstName;

    console.log(person);

    let myFirstJob = "Programmer";
    let myCurrentJob = "Programmermer";

    console.log(myFirstJob);
    console.log(myCurrentJob);
}

function func2() {
    const now = 2024;
    const ageBrandon = now - 1999;
    const ageIvan = now - 1990;
    console.log(ageBrandon, ageIvan);
    console.log(ageBrandon * 2, ageIvan / 10, 2 ** 3);

    const firstName = 'Brandon';
    const lastName = 'Ibanez';
    console.log(firstName + ' ' + lastName);

    let x = 10 + 5;
    console.log(x);
    x += 10;
    console.log(x);
    x *= 4;
    console.log(x);

    console.log(ageBrandon > ageIvan);

    console.log(now - 1999 > now - 2018);
}

function func3() {
    const firstName = 'Brandon';
    const job = 'Programmer';
    const birthYear = 1999;
    const year = 2024;

    const brandon = "I'm " + firstName + ', a ' + (year - birthYear)
        + ' years old ' + job + '!';

    console.log(brandon);

    const brandonNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

    console.log(brandonNew);
}

function func4() {
    const day = 'monday';

    switch (day) {
        case 'monday':
            console.log('Monday time!');
            break;
        case 'tuesday':
            console.log('Tuesday time!');
            break;
        case 'wednesday':
            console.log('Wednesday time!');
            break;
        case 'thursday':
            console.log('Thursday time!');
            break;
        case 'friday':
            console.log('Friday time!');
            break;
        default:
            console.log('Wrong wrong time!');
            break;
    }
}

// func4();

function assignment() {
    let country = "Philippines";
    let continent = "Asia";
    let myPopulation = 100;

    console.log(country);
    console.log(continent);
    console.log(myPopulation + "m");

    let isIsland = true;
    const LANGUAGE = "Filipino";

    console.log(typeof isIsland);
    console.log(typeof country);
    console.log(typeof continent);
    console.log(typeof myPopulation);

    console.log(LANGUAGE);

    console.log(myPopulation / 2);

    let populationOfFinland = 6;

    console.log(myPopulation > populationOfFinland);

    const AVG_POPULATION = 33;

    console.log(myPopulation < AVG_POPULATION);

    let description = country + " is in " + continent + ", and its "
        + myPopulation + " million people speak " + LANGUAGE;

    console.log(description);
}

let mark;
let john;
let markHigherBMI;

function populateMarkAndJohn() {
    mark = new Mark(1.69, 78);
    john = new John(1.95, 92);
    markHigherBMI = mark.calculateBMI() > john.calculateBMI();
}

class John {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    calculateBMI() {
        return this.weight / this.height ** 2;
    }
}

class Mark {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    calculateBMI() {
        return this.weight / this.height ** 2;
    }
}

function challengeOne() {
    populateMarkAndJohn();
    console.log(mark);
    console.log(john);
    console.log("Mark's BMI: " + mark.calculateBMI());
    console.log("John's BMI: " + john.calculateBMI());
    console.log(markHigherBMI);
}

function challengeTwo() {
    populateMarkAndJohn();
    if (markHigherBMI) {
        console.log(`Mark's BMI (${mark.calculateBMI().toFixed(2)}) is higher than John's (${john.calculateBMI().toFixed(2)})!`);
    } else {
        console.log(`John's BMI (${john.calculateBMI().toFixed(2)}) is higher than Mark's (${mark.calculateBMI().toFixed(2)})!`);
    }
}

class Animal {
    constructor(scores) {
        this.scores = scores;
    }

    calculateAverage() {
        return Math.round(this.scores.reduce(
            (n1, n2) => n1 + n2, 0) / this.scores.length);
    }
}

function challengeThree() {
    let dolphins = new Animal([96, 108, 89]);
    let koalas = new Animal([96, 108, 89]);
    // let koalas = new Animal([88, 91, 110]);
    let dolphinAverage = dolphins.calculateAverage();
    let koalaAverage = koalas.calculateAverage();
    console.log("Dolphins average score: " + dolphinAverage);
    console.log("Koalas average score: " + koalaAverage);

    if (dolphinAverage === koalaAverage) {
        console.log("We have a draw!");
    } else if (dolphinAverage > koalaAverage) {
        console.log("Dolphins are better!");
    } else if (dolphinAverage < koalaAverage) {
        console.log("Koalas are better!");
    }
}

const customFunction = function () {
    challengeThree();
}

const customArrowFunction = (myFunctionName) => myFunctionName();

customFunction();
customArrowFunction(challengeTwo);

class Calculator {
    constructor(bill) {
        this.bill = bill;
        if (bill >= 50 && bill <= 300) {
            this.tip = .15;
        } else {
            this.tip = .20;
        }
    }

    print() {
        console.log(`The bill was ${this.bill}, the tip was ${this.bill * this.tip}, and the total value ${this.bill + (this.bill * this.tip)}`);
    }
}

function challengeFour() {
    let calc1 = new Calculator(430);
    calc1.print();
}

// challengeFour();