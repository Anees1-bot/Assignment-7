// 1. Light Bulb Experiment
// Objective: Simulate a light bulb's on/off state.
// Task:
// Write a program that asks the user to input either 1 (turn on) or 0 (turn off).
// Use an if condition to print "The light is ON" or "The light is OFF."
// Extension: Add a third option to print "Invalid Input" if the user enters anything other than 1 or 0.

// var a = prompt("Enter 1 to turn ON or 0 to turn OFF:")
// if (a == 0) {
//     console.log("bulb is off");
// }
// else if (a == 1) {
//     console.log("bulb is on");
// }
// else {
//     console.log("Invalid input");
// }

// 2. Traffic Light Simulator
// Objective: Simulate traffic light behavior.
// Task:
// Accept an input (Red, Yellow, Green) from the user.
// Use if conditions to display:
// "Stop" for Red
// "Slow Down" for Yellow
// "Go" for Green
// Extension: Add a default message for invalid inputs like "Invalid Color."


// var user = prompt("Enter the color RED,YELLOW and GREEN")
// if (user == "RED") {
//     console.log("Stop")
// } else if (user == "YELLOW") {
//     console.log("Slow down")
// } else if (user == "GREEN") {
//     console.log("Go")
// } else {
//     console.log("Invalid color")
// }


// 3. Water Temperature Checker
// Objective: Categorize water temperature based on input.
// Task:
// Ask the user to input the temperature in Celsius.
// Use if conditions to print:
// "Freezing" if temperature <= 0
// "Cold" if temperature > 0 and <= 15
// "Warm" if temperature > 15 and <= 30
// "Hot" if temperature > 30

// var temp = prompt("Enter temperature in degree celsius");
// if (temp <= 0) {
//     console.log("Freezing")
// } else if (temp > 0 && temp <= 15) {
//     console.log("Cold")
// } else if (temp >= 15 && temp <= 30) {
//     console.log("Warm")
// } else if (temp >= 31) {
//     console.log("Hot")
// }

// 4. Rock-Paper-Scissors Game
// Objective: Simulate a simple game.
// Task:
// Accept inputs for two players (rock, paper, or scissors).
// Use if conditions to determine the winner:
// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper
// Print "Player 1 Wins," "Player 2 Wins," or "It's a Tie!"


// var p1 = prompt("Player 1, Enter Rock, Paper or Scissor").toLowerCase();
// var p2 = prompt("Player 2, Enter Rock, Paper or Scissor").toLowerCase();

// if (p1 === "scissor" && p2 === "rock") {
//     console.log("Player 2 Wins (Rock)")
// } else if (p1 === "scissor" && p2 === "paper") {
//     console.log("Player 1 Wins (Scissor)")
// } else if (p1 === "paper" && p2 === "rock") {
//     console.log("Player 1 Wins (Paper)")
// } else if (p1 === "rock" && p2 === "scissor") {
//     console.log("Player 1 Wins (Rock)")
// } else if (p1 === "rock" && p2 === "paper") {
//     console.log("Player 2 Wins (Paper)")
// } else if (p1 === "paper" && p2 === "scissor") {
//     console.log("Player 2 Wins (Scissor)")
// } else if (p1 === p2) {
//     console.log("It's a tie")
// } else {
//     console.log("Invalid input")
// }


// 5. Simple Alarm System
// Objective: Simulate an alarm trigger based on conditions.
// Task:
// Ask the user two yes/no questions:
// Is the door open? (yes or no)
// Is motion detected? (yes or no)
// Use if conditions to print:
// "Alarm Triggered" if either condition is yes.
// "All Safe" if both conditions are no.


// var input = prompt("Enter yes or no if the door is open or closed?")
// var input1 = prompt("Enter yes or no if motion is detected?")
// if (input === "yes" || input1 === "yes") {
//     console.log("Alarm is triggered")
// }
// else if (input === "no" && input1 === "no") {
//     console.log("All safe")
// } else {
//     console.log("Invalid input")
// }


// 6. Simple Temperature Conversion
// Objective: Convert Celsius to Fahrenheit or vice versa.
// Task:
// Ask the user to choose a conversion type: 1 for Celsius to Fahrenheit, 2 for Fahrenheit to Celsius.
// Take the temperature as input and use the formulas:
// C to F: F=(C×9/5)+32F = (C \times 9/5) + 32F=(C×9/5)+32
// F to C: C=(F−32)×5/9C = (F - 32) \times 5/9C=(F−32)×5/9
// Print the result using if conditions to ensure the correct formula is applied.


// var a = prompt("enter temperature in celsius")
// let b = a * 9 / 5 + 32
// console.log(b)
// var c = prompt("enter temperature in Fahrenheit")
// let d = c - 32 * 5 / 9
// console.log(d)


// 7. Password Strength Checker
// Objective: Check the strength of a password.
// Task:
// Take a password as input and check conditions:
// Length >= 8: Print "Strong Password"
// Length between 5 and 7: Print "Moderate Password"
// Length < 5: Print "Weak Password"
// Extension: Check if the password contains numbers or special characters for more detailed feedback.


// function checkPasswordStrength(password) {
//     let length = password.length;

//     if (length < 5) {
//         console.log("Password is Weak.");
//         alert("Password is Weak.");
//     } else if (length >= 6 && length <= 8) {
//         console.log("Password is Moderate.");
//         alert("Password is Moderate.");
//     } else {
//         console.log("Password is Strong.");
//         alert("Password is Strong.");
//     }
// }

// function main() {
//     let password = prompt("Enter your password:").trim();
//     checkPasswordStrength(password);
// }

// main();


// 8. Coin Toss Simulator
// Objective: Simulate a coin toss.
// Task:
// Ask the user to input 1 for "Heads" or 0 for "Tails."
// Use the random module to simulate a coin toss (random.randint(0, 1)).
// Compare the user’s input with the result and print "You Win!" or "You Lose!"


// function main() {
//     const CHOICES = {
//         0: "Tails",
//         1: "Heads"
//     };

//     alert("Enter 1 for Heads or 0 for Tails.");
//     let userInput = prompt("Your choice (1 for Heads, 0 for Tails):").trim();

//     while (userInput !== "0" && userInput !== "1") {
//         alert("Invalid input. Please enter 1 for Heads or 0 for Tails.");
//         userInput = prompt("Your choice (1 for Heads, 0 for Tails):").trim();
//     }

//     const userChoice = CHOICES[parseInt(userInput, 10)];
//     const coinToss = Math.floor(Math.random() * 2);
//     const tossResult = CHOICES[coinToss];

//     alert(`Coin toss result: ${tossResult}`);
//     if (userChoice === tossResult) {
//         alert("You Win!");
//     } else {
//         alert("You Lose!");
//     }
// }

// main();


// 9. Weather Suggestion Experiment
// Objective: Give outfit suggestions based on weather conditions.
// Task:
// Take weather input (Sunny, Rainy, Cold) from the user.
// Print:
// "Wear sunglasses" for Sunny
// "Take an umbrella" for Rainy
// "Wear a jacket" for Cold


// var weather = prompt("Enter Weather : ");
// if (weather == "sunny") {
//     console.log("Wear sunglasses.");
// } else if (weather == "rainy") {
//     console.log("Take an umbrella.");
// } else if (weather == "cold") {
//     console.log("Wear a warm jacket.");
// }


// 10.Write a program that checks if a person is eligible to vote based on their age (age >= 18).

// var age = prompt("Enter your age: ");
// if (age >= 18) {
//     console.log("You are eligible to vote");
// } else if (age < 18) {
//     console.log("You are not eligible to vote.you are " + (age) + " years old.");
// } else {
//     console.log("Invalid input");
// }

// 11.Write a program that accepts two numbers and prints the larger number using if conditions.

// var n1 = prompt("Enter the first number: ");
// var n2 = prompt("Enter the second number: ");
// if (n1 > n2) {
//     console.log("The first number is greater.The number is " + (n1) + ".");
// } else if (n2 > n1) {
//     console.log("The Second number is greater.The number is " + (n2) + ".");
// }

// 10. Simple Arithmetic Quiz
// Objective: Test arithmetic skills interactively.
// Task:
// Generate two random numbers and a random operator (+, -, *, /) using the random module.
// Ask the user to calculate the result.
// Compare the user's answer with the correct answer using an if condition and print "Correct!" or "Try Again!"

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomOperator() {
//     const operators = ["+", "-", "*", "/"];
//     return operators[Math.floor(Math.random() * operators.length)];
// }

// function calculate(num1, num2, operator) {
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num2 !== 0 ? parseFloat((num1 / num2).toFixed(2)) : null;
//         default:
//             return null;
//     }
// }

// function main() {
//     const num1 = getRandomNumber(1, 100);
//     const num2 = getRandomNumber(1, 100);
//     const operator = getRandomOperator();
//     const correctAnswer = calculate(num1, num2, operator);
//     const userAnswer = prompt(`Calculate: ${num1} ${operator} ${num2}`).trim();

//     if (isNaN(userAnswer)) {
//         alert("Invalid input. Please enter a numeric value.");
//         console.log("Invalid input. Please enter a numeric value.");
//         return;
//     }
//     if (parseFloat(userAnswer) === correctAnswer) {
//         alert("Correct!");
//         console.log("Correct!");
//     } else {
//         alert(`Try Again! The correct answer was ${correctAnswer}.`);
//         console.log(`Try Again! The correct answer was ${correctAnswer}.`);
//     }
// }

// main();