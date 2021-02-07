//A. Data 1

let averageNetScore = (96 + 108 + 89) / 3;
let averageKnicksScore = (88 + 91 + 110) / 3;

if (averageNetScore > averageKnicksScore) {
    console.log(`The winner of the competition is Nets with a score of ${averageNetScore}`)
} else if (averageNetScore = averageKnicksScore) {
    console.log(`It's a draw`);
} else {
    console.log(`The winner of the competition is Knicks with a score of ${averageKnicksScore}`)
}

//A. Data Bonus 1

averageNetScore = (97 + 112 + 101) / 3;
averageKnicksScore = (109 + 95 + 123) / 3;
let minimumScore = 100;

if ((averageNetScore > averageKnicksScore) && (averageNetScore >= minimumScore)) {
    console.log(`The winner of the competition is Nets with a score of ${averageNetScore}`)
} else if ((averageKnicksScore > averageNetScore) && (averageNetScore >= minimumScore)) {
    console.log(`The winner of the competition is Knicks with a score of ${averageKnicksScore}`)
} else {
    console.log(`It's a draw`);
}

//A. Data Bonus 2

averageNetScore = (97 + 112 + 101) / 3;
averageKnicksScore = (109 + 95 + 106) / 3;

if ((averageNetScore > averageKnicksScore) && (averageNetScore > minimumScore)) {
    console.log(`The winner of the competition is Nets with a score of ${averageNetScore}`)
} else if ((averageKnicksScore > averageNetScore) && (averageNetScore > minimumScore)) {
    console.log(`The winner of the competition is Knicks with a score of ${averageKnicksScore}`)
} else if ((averageNetScore <= minimumScore) || (averageKnicksScore <= minimumScore)) {
    console.log(`No team wins the trophy`);
} else {
    console.log(`It's a draw.`);
}

//B

let bill = 275;

switch (true) {
    case (bill >= 30 && bill <= 300):
        console.log(`The bill was ${bill}, the tip was ${0.15 * bill}, and the total value ${(0.15 * bill) + bill}`);
    break;
    case (bill < 0):
        console.log(`Invalid entry!!`)
    break;
    default:
        console.log(`The bill was ${bill}, the tip was ${0.20 * bill}, and the total value ${(0.20 * bill) + bill}`);
}

bill = 28;

switch (true) {
    case (bill >= 30 && bill <= 300):
        console.log(`The bill was ${bill}, the tip was ${0.15 * bill}, and the total value ${(0.15 * bill) + bill}`);
    break;
    case (bill < 0):
        console.log(`Invalid entry!!`)
    break;
    default:
        console.log(`The bill was ${bill}, the tip was ${0.20 * bill}, and the total value ${(0.20 * bill) + bill}`);
}

bill = 430;

switch (true) {
    case (bill >= 30 && bill <= 300):
        console.log(`The bill was ${bill}, the tip was ${0.15 * bill}, and the total value ${(0.15 * bill) + bill}`);
    break;
    case (bill < 0):
        console.log(`Invalid entry!!`)
    break;
    default:
        console.log(`The bill was ${bill}, the tip was ${0.20 * bill}, and the total value ${(0.20 * bill) + bill}`);
}


//C. 1

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
let c = 30;
celsiusToFahrenheit(c);
console.log(`${c}°C is ${celsiusToFahrenheit(c)}°F.`);

//C. 2

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let f = 30;
fahrenheitToCelsius(f);
console.log(`${f}°F is ${fahrenheitToCelsius(f)}°C.`);