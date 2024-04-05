function function1() { //Storing values with the Assignment Operator
    var myName = "Brandon";
    console.log("myName: " + myName);
    myName = 8;
    console.log("myName: " + myName);
    let thisName = myName;
    console.log("thisName: " + myName);
    const randomName = thisName;
    console.log("randomName: " + myName);

    var a = 5;
    var b = 10;
    var c = "I am a";
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);

    a += 5;
    b += 10;
    c += " String!";
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
}

function function2() { //Arithmetic Operators
    //Basic Arithmetic
    var a = 10 + 5; //15
    var b = 10 - 5; //5
    var c = 10 / 2; //5
    var d = 5 * 2; //10
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
    console.log("D: " + d);

    //Arithmetic with decimal
    var a = 10 + 0.2; //10.2
    var b = 10 - 0.5; //9.5
    var c = 10 / 0.5; //20
    var d = 5 * 0.1; //0.5
    console.log("A: " + a);
    console.log("B: " + b);
    console.log("C: " + c);
    console.log("D: " + d);

    //Modulo operator
    var remainder = 11 % 3;
    console.log("Remainder: " + remainder);
}

function function3() { //Strings
    //Escaping Literal Quotes
    var myStr = "I am a\" random adventurer\" walking through the desert\" without armor :(";
    console.log(myStr); 

    //Quoting Strings with Single Quotes
    myStr = 'I am a\" random adventurer\" walking through the desert\" without armor \n:(';
    console.log(myStr);

    //Concatenate
    myStr += " :)";
    console.log(myStr);

    //Constructing Strings with variables
    var name = "Brandon";
    console.log("Hello, I am " + name);

    //Append String variables
    myStr += " Hello, I am " + name;
    console.log(myStr);
}

function3();