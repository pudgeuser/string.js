// Create a variable named favActorFirstName and store your favorite actor's first name.
let favActorFirstName = "Paul";

// Create a variable named favActorLastName and store their last name.
let favActorLastName = "Walker";

// Concatenate the first and last names into a variable named fullName.
let fullName = favActorFirstName + " " + favActorLastName;

// Create a variable named uppercase and store the lowercase version of your favorite actor's name.
let uppercase = fullName.toLowerCase();

// Create a variable named lowercase and store the capitalized version of your favorite pet's name.
let lowercase = "Yin".toUpperCase();

// Create a variable named message and store a message like: "My favorite actor is (FULL NAME]". The name should be in uppercase.
let message = "My favorite actor is " + fullName.toUpperCase();

// Append the message to include "his best show is Fast & Furious".
message += " and his best show is Fast & Furious.";

console.log(message);