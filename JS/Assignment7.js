/*Lucas and John are trying to compare their BMI(Body Mass Index), which is
calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height)(mass in kg
and height in meter).

Your tasks:
1. Store Lucas's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both
versions)
3. Create a Boolean variable 'lucasHigherBMI' containing information about
whether Lucas has a higher BMI than John.
4. Use Template Literals to display the Data 2 result (? is a value):
Lucas and John are friends, Lucas is ? m tall and John is ? m tall.
So John has higher BMI than Lucas, that is ?.

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
console.log("Lucas's BMI is " + bmiLucasf1, "and John's BMI is " + bmiJohnf1);

//Using Formula 2
let bmiLucasf2 = massLucas / (heightLucas * heightLucas);

let bmiJohnf2 = massJohn / (heightJohn * heightJohn);
console.log(`Lucas's BMI is ${bmiLucasf2} and John's BMI is ${bmiJohnf2}`);

let lucasHigherBMI = bmiLucasf1 > bmiJohnf1;
console.log(`Lucas has a higher BMI than John is ${lucasHigherBMI}.`);

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
console.log(`Lucas has a higher BMI than John is ${lucasHigherBMI}.`);
console.log(`Lucas and John are friends, Lucas is ${heightLucas}m tall and John is ${heightJohn}m tall. So John has higher BMI than Lucas, that is ${lucasHigherBMI}`);