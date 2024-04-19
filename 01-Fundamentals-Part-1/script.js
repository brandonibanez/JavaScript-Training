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

assignment();