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

function func5() {

    const somethingArray = [
        'Brandon',
        'Ibanez',
        3,
        4,
        5,
        'Programmer',
        true
    ];

    for (let x = 1; x <= 10; x++) {
        console.log(`Doing repetition number: ${x}`);
    }

    for (let x = 0; x < somethingArray.length; x++) {
        console.log(somethingArray[x], typeof somethingArray[x]);
    }

    let loop = true;
    let counter = 1;

    console.log(`Outside loop '${loop}'`);
    while (loop) {
        console.log(`Inside loop '${loop}' ${counter}`);
        counter++;
        loop = counter > 3 ? false : true;
    }
    console.log(`Outside after the loop '${loop}'`);
}

// func5();

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

// customFunction();
// customArrowFunction(challengeTwo);

class Calculator {
    constructor(bill) {
        this.bill = bill;
        this.tip = bill >= 50 && bill <= 300
            ? .15
            : .20;
        this.totalValue = this.bill + (this.bill * this.tip);
        // if (bill >= 50 && bill <= 300) {
        //     this.tip = .15;
        // } else {
        //     this.tip = .20;
        // }
    }

    print() {
        console.log(`The bill was ${this.bill}, the tip was ${this.bill * this.tip}, and the total value ${this.totalValue}`);
    }

    // print() {
    //     console.log(`The bill was ${this.bill}, the tip was ${this.bill * this.tip}, and the total value ${this.bill + (this.bill * this.tip)}`);
    // }
}

// var NewCalculators = function (bills) {
//     bills = bills;
//     let tips = bills.map(bill => bill >= 50 && bill <= 300
//         ? .15
//         : .20)
//     let totalValues = bills.map(bill => bill >= 50 && bill <= 300
//         ? bill + (bill * .15)
//         : bill + (bill * .20))

//     function print() {
//         for (let x = 0; x < bills.length; x++) {
//             console.log(`The bill was ${bills[x]}, the tip was ${bills[x] * tips[x]}, and the total value ${totalValues[x]}`);
//         }
//     }

//     function printBillsAverage() {
//         const average = Math.round(bills.reduce((n1, n2) => n1 + n2, 0) / bills.length);
//         console.log(`Bills average: ${average}`);
//     }

//     print();
// }

class NewCalculator {

    constructor(bills) {
        this.bills = bills;
        this.calculateTipsAndTotalValues();
        // this.tips = [];
        // this.totalValues = [];

        // for (let x = 0; x < bills.length; x++) {
        //     this.tips[x] = bills[x] >= 50 && bills[x] <= 300
        //         ? .15
        //         : .20;
        //     this.totalValues[x] = this.bills[x] + (this.bills[x] * this.tips[x]);
        // }
    }

    calculateTipsAndTotalValues() {
        this.tips = this.bills.map(bill => bill >= 50 && bill <= 300
            ? .15
            : .20)
        this.totalValues = this.bills.map(bill => bill >= 50 && bill <= 300
            ? bill + (bill * .15)
            : bill + (bill * .20))
    }

    print() {
        for (let x = 0; x < this.bills.length; x++) {
            console.log(`The bill was ${this.bills[x]}, the tip was ${this.bills[x] * this.tips[x]}, and the total value ${this.totalValues[x]}`);
        }
    }

    printBillsAverage() {
        const average = Math.round(this.bills.reduce((n1, n2) => n1 + n2, 0) / this.bills.length);
        console.log(`Bills average: ${average}`);
    }
}

function challengeFour() {
    const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
    let calc1 = new Calculator(275);
    let calc2 = new NewCalculator(bills);
    console.log(calc2);
    bills.push(275)
    // calc2.bills.push(275);
    calc2.calculateTipsAndTotalValues();
    calc2.bills.push(275);
    calc2.calculateTipsAndTotalValues();
    console.log(calc2);
    calc2.print();
}

challengeFour();