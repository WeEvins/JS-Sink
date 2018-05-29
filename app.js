let myName = 'Warryn Evins';

let usStates = 50;

let x = 5 + 4; 
console.log(x)



if (myName.charCodeAt(0) >= "L".charCodeAt(0) ) {
    alert('Back of the Line!');
} else {
    alert('Next!')
}

function sayHello(){
    console.log('Hello World!')

}

sayHello()

function checkAge (name, age) {
    if (age < 21) {
        console.log(`Sorry, ${name}, you are not old enough to view this site.`)
    } else {
        console.log(`Access granted. Welcome ${name}`)
    }
}

checkAge ('Charles', 21)
checkAge ('Abby', 27)
checkAge ('James', 18)
checkAge ('John', 17)

let vegetables = ['Broccoli', 'Asparagus', 'Cucumber', 'Zuchini']

for (let i = 0; i < vegetables.length; i++) {
    console.log(vegetables[i])
}

let people = [
    {
        name: 'Kaytlyn',
        age: 20
    },
    {
        name: 'Drea',
        age: 26
    },
    {
        name: 'Marinette',
        age: 15
    },
    {
        name: 'Nyx',
        age: 28
    },
    {
        name: 'Stella',
        age: 24
    }
]

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age)
}

function getLength(inputString) {
    return inputString.length
}

let length = getLength('Hello World!')

if (length % 2 === 0) {
    alert('The world is nice and even')
}
else {
    alert ('The world is an odd place')
}