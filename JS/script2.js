/*let number = 23;
const 

y = x = 3 / 2 - 1;

let plate === 'pizza';

console.log(plate,x,y,3/2, "this is text" + \n\plate);

console.log(`this is text ${3/2} this is 
another text ${isJohnBMI}`)*/


/*The Temperature Converter.    
•	Store a celsius temperature into a variable. Convert it to fahrenheit and output "NN°C is NN°F".
•	Now store a fahrenheit temperature into a variable. Convert it to celsius and output "NN°F is NN°C.*/

let cTemp = 30;
let cToF = cTemp * 9 / 5 + 32;

let fTemp = 30;
let fToC = (fTemp - 32) * 5 / 9;
console.log(`${cTemp} °C in fahrenheit is ${cToF} °F and ${fTemp} °F in celcius is ${fToC} °C`);


//Taking decisions
//const isAdult = age >= 16;

//const isAdult = false;


const age = 12;
if(age >= 16){
    console.log('You can drive! Yay!');
}else {
    const yearLeft = 16 - age;
    console.log(`wait for another ${yearLeft} years :)`);
}

birthYear = 1996;
let century;
if(birthYear <= 2000){
    century = 20;
}
//else(){
    //century = 21;}
else{
    console.log(21)
}
/*Assignment:
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:
1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Lucas' BMI is higher than John's!" or "John's BMI is higher than Lucas'!"
2. Use a template literal to include the BMI values in the outputs. Example: "Lucas' BMI (28.3) is higher than John's (23.9)!"

Use an if/else statement
*/

let massLucas = 78;
let heightLucas = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let bmiLucas = massLucas / heightLucas ** 2;
let bmiJohn = massJohn / heightJohn * heightJohn;

if(bmiLucas > bmiJohn){
    console.log(`Lucas' BMI ${bmiLucas} is higher than John's! ${bmiJohn}`);
}else{
    console.log(`John's BMI ${bmiJohn} is higher than Lucas'! ${bmiLucas}`)
}

//Type conversion and Coersion
//Truely and Falsely value

const inputYear ='1996';
console.log(2021 - inputyear);
console.log(3992 / inputYear);
console.log(2 * inputYear);
console.log(2021 + Number(inputYear));
//console.log(typeof );
console.log(String(2021), 2021);

console.log('I\'m ' + 23 + 'year old');
console.log('I\'m ' + '23' + 'year old');
console.log(100 - '23' + ' year old'); 
console.log('100' > 2)   //true

let x ='11' +1; //111
x = x - 1;      //110
console.log(x); //110

//Falsy Values 0, '', undefined, null, NaN (not a number) 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('John')); //true
console.log(Boolean({}));  //true
console.log(Boolean(''));  

const balance = 0;
if(balance){
    console.log('Good for now!');
}
else{
    console.log('Get a job');
}

let age;
if(age){
    console.log('Got your age');
}
else{
    console.log('!!Undefined');
}

//== ===, Boolean Logis, Logical Operators

const age = 18;
if(age === 18) console.log('You have become an adult');
if(age == 18) console.log('You have become an adult');


//prompt("Guess the number");
const userInput = prompt("Guess the number"); //takes input as string
console.log(userInput);
console.log(typeof userInput)

//prompt("Guess the number");
const userInput = Number(prompt("Guess the number"));
console.log(userInput);
console.log(typeof userInput);

if(userInput === 10){
    console.log("Number Matched!");
}else if(userInput === 8){
    console.log("8 is also Matched!");
}else{
    console.log("!!!Not Matched");
}

if(userInput != 12) console.log('why not 8');


/*age = 16
A: age is greater than 18 false
B: age is less than 30 True

!A    True
A and B false
A or B True
!B and A false
A or !B false*/

const  driverLic= true;
const goodVis= false;
const notsleepy=  true;
console.log(driverLic && goodVis);
console.log(driverLic || goodVis);
console.log(!driverLic);

if(driverLic && !goodVis && notsleepy){
    console.log('You can drive');
}else{
    console.log('You can not drive');
}
/*
There are two teams, Nets and Knicks.They compete against each other 3 times.
The team with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console.Don't forget that there can be a draw, so test for that
as well(draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points.Hint: Use a logical operator to test for minimum
score, as well as multiple else -if blocks.
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points.Otherwise, no team wins the trophy
Test data:
§ Data 1: Nets score 96, 108 and 89. Knicks score 88, 91 and 110

§ Data Bonus 1: Nets score 97, 112 and 101. Knicks score 109, 95 and 123
§ Data Bonus 2: Nets score 97, 112 and 101. Knicks score 109, 95 and 106

*/

let netScore = (96 + 108 + 89) / 3;
let knicksScore = (88 + 91 + 110) / 3;

let averageNetScore;
let averageKnicksScore;

if(averageNetScore > averageKnicksScore){
    console.log(`The winner of the competition is Nets with a score of ${averageNetScore}`)
}else if(averageNetScore = averageKnicksScore){
    console.log(`It's a draw`);
}else{
    console.log(`The winner of the competition is Nets with a score of ${averageKnicksScore}`)
}

//Functions
const meal ='breakfast';
switch(meal){
    case 'breakfast':
        console.log('coffee and bread');
    break; //put a break after each condition so the next case will not be excuted
    case 'morningtea':
    case 'lunch':
        console.log('sandwitch and juice');
    break;
    case 'afternoontea':
        console.log('cookies and tea');
        break;
    case 'dinner':
        console.log();
        break;
    default:
        console.log('No food'); //nothing is match
}

/*
alert();

Number();

String();

prompt();
*/

