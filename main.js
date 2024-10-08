/**
 * 2.3 - Mathematics
 * ICS3 - Mr. Brash 🐿️
 * 
 * Make sure to read the README.md (especially if you missed class)
 * Then checkout the YOUR_TASK.md to see the practice plan
 * 
 * Don't forget - these are playgrounds. Once you finish the requested task, feel free to play.
 **/ 

// Get a random number between 0 and 100
let random_number = Math.random() * 100

// Round it to the nearest whole number
random_number = Math.round(random_number)

// Output the result usijng a new way to insert a variable into a string (called a template)
console.log(`I generated the number ${random_number}`)


// ***  Your code goes below  ***


// TASK PART 1

let celsius = 100;

let fahrenheit = 0;

celsius += 2; // Adds 2 to celsius

fahrenheit = (celsius * 9/5) + 32; // Converts celsius to fahrenheit

console.log(fahrenheit);


// TASK PART 2

fahrenheit = 77

celsius = (fahrenheit - 32) * 5/9; // Converts fahrenheit to celsius

console.log(celsius);


// TASK PART 3

console.log(`${fahrenheit} degrees Fahrenheit is ${celsius} degrees Celsius.`) // Shows the fahrenheit and celsius values


// TASK PART 4

let m = (0 - 5)/(6 - (-4)) // The equation for slope is m = (y2 - y1)/(x2 - x1)

console.log(`The slope from point A(-4, 5) to point B(6, 0) is ${m}.`)


// TASK PART 5

let radius = Math.round(Math.random() * 10) // Random number between 0-10

let height = Math.round(Math.random() * 10)

let cylinder_volume = Math.round(Math.PI * (radius**2) * height) // The equation for the volume of a cylinder is π(r^2)h

console.log(`The volume of my random cylinder is ${cylinder_volume}`)