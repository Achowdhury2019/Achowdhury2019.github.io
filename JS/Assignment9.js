const john = {
    firstName: 'John',
    lastName: 'Williams',
    birthYear: 1996,
    job: 'students',
    friends: ['Mike', 'Jack', 'Peter'],
    calAge: function () {
        const age = 2021 - this.birthYear;
        return age;
    },
    getSummary: function () {
        return `${this.firstName} ${this.lastName} is ${this.calAge()} years old, and he has ${(this.calAge() >= 18) ? `a` : `no`} driver's license.`;
    }
};

//A
console.log(`${john.firstName} ${john.lastName} has ${john.friends.length} friends, and his best friends is called ${john.friends[1]}.`);

//B
console.log(john.getSummary());

//C

let btn = document.querySelectorAll('.btn');
let modal = document.querySelector('.modalWindow');
let closeWin = document.querySelectorAll('.closebtn');

const openModal = function () {
    modal.classList.add('modalHide');
};


for (i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', openModal);
}

const closeModal = function () {
    modal.classList.remove('modalHide');
};

for (i = 0; i < closeWin.length; i++) {
    closeWin[i].addEventListener('click', closeModal);
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.classList.remove('modalHide');
    }
}