//node-specific stuff
var prompt = require('prompt-sync')();

// strings
"this is a string"
'this is a string too'

// numbers
1
34.3
-400

// declaring a variable
var x = 3
var y = 72.0
var name = "larry"
var color = "blue"
var luckyNumbers = [1, 4, 33]

// some built-in operators
x + y // evaluates to 75.0
y - x // evaluates to 69.0
name + color // evaluates to "larryblue"

// functions
function sillyName(name){
	return "mr. " + name + "pants"
}

sillyName("fart") // evaluates to "mr. fart pants"

// conditionals & loops (control structures)

if(name == "larry"){
	console.log("Hi larry!");
}else{
	console.log("You're not larry!")
}

var count = 0
while(count < 3){
	console.log(count);
	count = count + 1;
}

for(z = 0; z<3; z++){
	console.log(z);
}

// working with arrays
var names = ["bob", "susan", "sally"]
names[0] // evaluates to "bob"
names[1] // evaluates to "susan"
names[2] // evaluates to "sally"
names.length // evaluates to 3

for(z = 0; z < names.length; z++){
	console.log("Name # " + z + " is " + names[z])
}

// console input/output
var favoriteFood = prompt('What is your favorite food?')
console.log("Your favorite food is " + favoriteFood)

//###########################
// SCRATCH SPACE
//###########################
console.log(x)
console.log ("there are " + x + " people")


var name = prompt('What is your name?')

console.log(sillyName(name))
console.log("Your name is " + name)
console.log(x)
console.log ("your nickname is " + name + " the " + favoriteFood)
