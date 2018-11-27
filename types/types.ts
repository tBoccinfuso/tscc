// String
let firstName: string;
firstName = "thomas";

// Number
let age: number;
age = 52;

// Array of strings only
let colors: string[];
colors = ["red", "42"];

// Any Types
let language: any;
language = "English";
language = 11;
language = false;
language = [12, "hello"];


// Using types in a function
const add = (val1: number, val2: number) => {
  return val1 + val2
}

add(1,2)