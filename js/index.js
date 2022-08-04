// Iteration 1: Names and Input

const hacker1 = 'Alex';
console.log(`The driver\'s name is ${hacker1}.`);

const hacker2 = 'Marc';
console.log(`The navigator\'s name is ${hacker2}.`);

// Iteration 2: Conditionals

if (hackerOneNameLength > hackerTwoNameLength) {
    console.log(`The driver has the longest name, it has ${hackerOneNameLength} characters`);
  } else if (hackerTwoNameLength > hackerOneNameLength) {
    console.log(`The navigator has the longest name, it has ${hackerTwoNameLength} characters`);
  } else if (hackerOneNameLength === hackerTwoNameLength) {
    console.log(`Wow, you both have equally long names, ${hackerOneNameLength} characters!`);
  };

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split('').join(' '));

console.log(hacker2.split('').reverse('').join(''));

if (hacker1[0].localeCompare(hacker2[0]) === -1) {
  console.log('The driver\'s name goes first');
} else if (hacker1[0].localeCompare(hacker2[0]) === 1) {
  console.log('The navigator\'s name goes first');
} else {
  console.log('What?! You both have the same name?');
}

// bonus 1:

let count = (str.match(/et/g) || []).length;
console.log(count);