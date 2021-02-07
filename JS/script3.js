//Ternary operator
const age = 12;
age >= 16 ? console.log(`You can Drive!!`) : console.log(`Wait a few years:/`);

let canDrink;
const age1 = 12;
if (age1 >= 21) {
    canDrink = 'Wine';
} else {
    canDrink = 'Water'
}
console.log(canDrink);

//or
const age2 = 12;
console.log(`${age2 >= 21 ? 'Wine' : 'Water'}`);

let bill = 275;

(bill >= 30 && bill <= 300) ? console.log(`The bill was ${bill}, the tip was ${0.15 * bill}, and the total value ${(0.15 * bill) + bill}`) : console.log(`The bill was ${bill}, the tip was ${0.20 * bill}, and the total value ${(0.20 * bill) + bill}`);

bill = 28;

(bill >= 30 && bill <= 300) ? console.log(`The bill was ${bill}, the tip was ${0.15 * bill}, and the total value ${(0.15 * bill) + bill}`) : console.log(`The bill was ${bill}, the tip was ${0.20 * bill}, and the total value ${(0.20 * bill) + bill}`);

bill = 430;

(bill >= 30 && bill <= 300) ? console.log(`The bill was ${bill}, the tip was ${0.15 * bill}, and the total value ${(0.15 * bill) + bill}`) : console.log(`The bill was ${bill}, the tip was ${0.20 * bill}, and the total value ${(0.20 * bill) + bill}`);

//functions

function show() {
    console.log(`this is some text`)
};

show();
show();
show();
show();

function microwave(food, time, mode) {
    const readyToEat = `Your${food} will be heated for ${time} under ${mode} mode`;
    return readyToEat;
};

const dinner = microwave('Pizza', '3mins', 'warm');
console.log(dinner);

//arrow function

const calAge = birthYear => 2021 - birthYear;
console.log(calAge(1996));

const yearUnitRetire = (birthYear, firstName) => {
    const age = 2021 - birthYear;
    const retire = 65 - age;
    return `${firstName} retires in ${retire} years.`
}
console.log(yearUnitRetire(1996, 'Lucas'));


//function calling other function

function doubleTime(min) {
    return min * 2;
}

function microWave(food, time, mode) {
    const timeNew = doubleTime(time);
    const readyToEat = `Your ${food} will be heated for ${timeNew} mins under ${mode} mode`;
    return readyToEat;
}
console.log(microWave('chicken', '4', 'warm'));

//Function Expression

const calAge1 = function (birthYear) {
    return 2021 - birthYear;
}

const calAge2 = function (birthYear, firstName) {
    const age = calAge2(birthYear);
    const retire = 65 - age;
    if(retire > 0){
        console.log();
        return retire;
    }
    else{

    return -1;

    
    }
    return `${firstName} retires in ${retire} years`
}

/*Back to the two  teams game, the Nets and the Knicks! There is a new discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgNets' and 'avgKnicks'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Knicks win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Nets score 44, 23 and 71. Knicks score 65, 54 and 49
TEST DATA 2: Nets score 85, 54 and 41. Knicks score 23, 34 and 27
*/

const calAverage = (a,b,c) =>(a + b + c)/3;
console.log(calAverage(3,4,5));

let scoreNets=calAverage();

const checkWinner = function(avgNets, avgKnicks){
    if(avgNets >= 2 * avgKnicks){
        console.log()
    }
}

checkWinner(scoreNets, );

//Array

const student = ['John', 'Jay', 'Jeff', 'Jack','Peter','Lucas']
console.log(student);

const students = new Array('John', 'Jay', 'Jeff', 'Jack','Peter','Lucas');
const years = new Array(1992, 1991, 1996);

//Array position
console.log(students[0]);
console.log(students.length);
console.log(students[students.length-1]);

const John = ['John', 1996, '60kg', 2021-1996, 'students'];

const calAge3 = function(birthYear){
    return age - birthYear;
};

const year = [1890, 1991, 1994, 1992]

console.log(calAge3(year));

const age3 = year[0];
const age4 = year[1];

const age5 = [calAge3(year[0]), ]
const ages =[calAge3(years[0]),calAge3(years[1]),calAge3(years[2]),calAge3(years[3])];
console.log(ages);

const student1 = ['John', 'Jay', 'Jeff', 'Jack','Peter','Lucas']
student1.push('Mark');
console.log(student1);

console.log(student1.indexOf('Mark'));
console.log(students.includes('Mark'));
console.log(students.pop('')); //remove the last element

console.log(students.shift(''));  //removes the first value
console.log(students.unshift(''));

//object

const johnArray= [
    'John',
    'WIlliams',
    2021-1996,
    'student',
    ['Mike','Jack','Peter']
]


const john = {
    firstName: 'John',
    lastName: 'Williams',
    birthYear: 1996,
    job: 'student',
    friends: ['Mike','Jack','Peter'],
    
    calAge: function(){
        this.age = 2021- this.birthYear;
        return this.age;
    }
    getSummary: function(){

        return `? is a # years onload, and he has ${  ? : } drivers license`
    }
}

console.log(john);
console.log(john.lastName);
console.log(john['firstName']);

const nameJ = 'Name';
console.log(john['first' + nameJ]);

john.address='....';
john['instagram']= '@john';
console.log(john)


//Assignment 9A
console.log()

console.log(john.calAge());
console.log(this.age);