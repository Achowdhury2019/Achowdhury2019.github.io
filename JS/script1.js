//alert("Amazing!")

//let plate="pizza"

//if(plate === "pizza")
//   alert("Amazing!");

console.log(123);
console.log("Amazing");

let plate;
plate = "pizza";
plate = "eggs";

const birthYear = 1998;
let myBestFriend = "Sarah";
let my2ndBestFriend = "Maryam";
//let PI=3.14;

const firstName = "John";
console.log(firstName);

const lastName = "Willams";
console.log(lastName);

/*Class activity1
Declare variables called 'city' 'borough'  'area' and 'population', assign their values according to their own borough.
log their values to the console*/

const city = "New York City";
console.log(city);

let borough = "Queens";
console.log(borough);
borough = "Brooklyn";
console.log(borough);

const area = 108.1;
console.log(area);

true;
console.log(true);
console.log(typeof true);
console.log(typeof 123.08);
console.log(typeof "pizza");
//console.log(typeof null);

//let plate = true;
//console.log(typeof plate);

10 + 2 - 2;
console.log(10 + 2 - 2);

console.log(8 <= 2);

console.log(11 - 1 < 3 + 8);

//Google MDN Operator precedence
const currentYear = 2021;
const ageJohn = currentYear - 1998;
const ageLucas = currentYear - 1996;
console.log(ageJohn, ageLucas);

console.log(ageJohn * 2, ageLucas / 2, 2 * 2 * 2);

console.log(firstName + " " + lastName);

let x = 10 + 2;
console.log(x);

x = x + 2;
console.log(x);

x = +2; //same as x = x + 2
console.log(x);

x -= 2;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);

let y;
y = x = x + 3 - 2 + 10;
console.log(x, y);

console.log(currentYear - 1998 > currentYear - 1996);

/*Class Activity:

Lucas and John are trying to compare their BMI(Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height)(mass in kg
and height in meter).

Your tasks:
1. Store Lucas's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'lucasHigherBMI' containing information about
whether Lucas has a higher BMI than John.

Test data:
§ Data 1: Lucas weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
m tall.
§ Data 2: Lucas weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
m tall.*/

//Data 1 test

let massLucas = 78;
let heightLucas = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

//Using Formula 1
let bmiLucasf1 = massLucas / heightLucas ** 2;
let bmiJohnf1 = massJohn / heightJohn ** 2;
console.log("Lucas's BMI is " + bmiLucasf1, " and John's BMI is "+ bmiJohnf1);

//Using Formula 2
let bmiLucasf2 = massLucas / (heightLucas * heightLucas);

let bmiJohnf2= massJohn / (heightJohn * heightJohn);
console.log(`Lucas's BMI is ${bmiLucasf2} and John's BMI is ${bmiJohnf2}`);

let lucasHigherBMI = bmiLucasf1 > bmiJohnf1;
console.log(`Lucas has a higher BMI is ${lucasHigherBMI}`);

//Data 2 test

massLucas = 95;
heightLucas = 1.88;

massJohn = 85;
heightJohn = 1.76;

//Using formula 1
bmiLucasf1 = massLucas / heightLucas ** 2;
bmiJohnf1 = massJohn / heightJohn ** 2;
console.log("Lucas's BMI is " + bmiLucasf1, `and John's BMI is ${bmiJohnf1}`);

//Using formula 1
bmiLucasf2 = massLucas / (heightLucas * heightLucas);
bmiJohnf2 = massJohn / (heightJohn * heightJohn);
console.log(`Lucas's BMI is ${bmiLucasf2}, and John's BMI is ${bmiJohnf2}`);

lucasHigherBMI = bmiLucasf1 > bmiJohnf1;
console.log(`Lucas has a higher BMI is ${lucasHigherBMI}`);
console.log(`Lucas and John are friends, Lucas is ${heightLucas}m tall and John is ${heightJohn}m tall. So John has higher BMI than Lucas, that is ${lucasHigherBMI}`);

//Strings and Template Literals
/*   const firstName = "John";
    const BMI ="";
    const year = 2021;

    console.log(firstName + BMI + ' '+ "is" + age + "old");

    const johnInfo= (`${firstName}'s ${BMI} , ${year} is ${age} old`);
*/


