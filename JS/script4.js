/*Let's go back to Lucas and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)
 
1. For each of them, create an object with properties for their full name, mass, and height (Lucas Miller and John Smith)

2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.

3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Lucas Miller's (23.9)!"
 
TEST DATA: Lucas weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.*/

const lucas ={
    firstName: 'Lucas',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        return this.mass /this.height**2;
    }
}
console.log(lucas.calcBMI());

const john ={
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        return this.mass /this.height**2;
    }
}

console.log(john.calcBMI());


//for loop

for(let rep = 1; rep <= 8; rep++){
    console.log('Breakfast option soymilk order 1');
}

for(let rep = 1; rep <= 8; rep++){
    console.log(`Breakfast option soymilk order ${rep}`);
}

const smith=[
    'John',
    'Williams',
    2021-1996,
    'student',
    ['Mike', 'Jack', 'Peter'],
    true
]

for(let i = 0; i < john.length; i++){
    console.log(john[i],typeof john[i]);
}
    
for(let i = 0; i < john.length; i++){
    const types=[];
    console.log(john[i]);
    types.push(typeof john[i]);
    console.log(types);   
}

const years = [1991, 2006, 1969, 2001];
const ages=[];
for(let i= 0; i < years.length; i++){
    ages.push(2021 - years[i]);
}
console.log(ages);

for(let i = 0; i < john.length; i++){
    if(typeof john[i] !== 'string') continue; // continue the loop
    console.log(john[i], typeof john[i]);
}


const year = [1991, 2006, 1969, 2001];
const age=[];
for(let i= year.length - 1; i >= 0; i--){
    age.push(2021 - year[i]);
}
console.log(age);

//while loop
let rep = 1;
while( rep <= 10){
    console.log(`Breakfast order ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random()*6)+1; // number between 1 - 6

whhile(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random()*6)+1;
    if(dice === 6) console.log(`You got 6!`);
}

/*Let's improve the tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals('tips' and 'totals')
3. Use the 'calcTip' function we wrote before(no need to repeat) to calculate tips and total values(bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays \

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. */

const bills = [22,295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function(bill){

    return bill >= 30 && bill <= 300 ? bill * .15 : bill * 0.2;

}

for(let i = 0; i <= bills.length; i++{

    tips.push();
    totals.push(tips + bills);

}

console.log(bills);
console.log(tips);
console.log(totals);
const calcAverage = function (arr){
    let sum = 0;
    for(){

    }
    sum += 

}

