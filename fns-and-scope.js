//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';

//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

function isTyler (name) {
	if(name === "Tyler") {
		return true;
	}
	else {
		return false;
	}
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


function getName () {
	var name = prompt("enter your first name");
	return name;
}


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

function welcome () {
	var userName = getName();
	alert("welcome " + userName);
}


//Next problem




//What is the difference between arguments and parameters?

Parameters hold a place for an argument to be passed into a function (when you define the function)
the argument is the value that you pass into the function (when you invoke the function)


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?
false
""
0
null
NaN
undefined

if (myvariable) {
	console.log('truthy');
}
else {
	console.log('falsy');
}


//Next Problem


//Create a function called myName that returns your name

function myName () {
	return "Jordan";
}

//Now save the function definition of myName into a new variable called newMyName

var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem


//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn () {
  return function() {
  	return "Jordan"
  }
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();
//Now invoke innerFn.

innerFn();

