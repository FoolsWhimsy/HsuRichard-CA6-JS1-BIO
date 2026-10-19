
// Prompts user for name
let name = prompt("Welcome to Bear, Ninja, Hunter! Please enter your name to get started:")
if (name === null) {
    name = "friend";
}

// Sends alert using their name
alert(`Hi ${name}! Let's Play!!`);

// Provides them a choice and input before displaying the result.
let choice = prompt("Who are you: Bear, Ninja, or Hunter?")
console.log(`${name}, you picked ${choice}!`);
console.log('The computer picked Bear!');