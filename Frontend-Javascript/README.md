# JavaScript by Meta for Front-end

## First-class functions
t means that a function in JavaScript is just another value that we can:

    pass to other functions

    save in a variable

    return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different than a string or a number.

## Higher-order functions

A higher-order function is a function that has either one or both of the following characteristics:

    It accepts other functions as arguments

    It returns functions when invoked


There's no "special way" of defining higher-order functions in JavaScript. It is simply a feature of the language. The language itself allows me to pass a function to another function, or to return a function from another function.

## Pure functions and side-effects

A pure function returns the exact same result as long as it's given the same values


Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

This includes: 

    changing variable values outside of the function itself, or even relying on outside variables 

    calling a Browser API (even the console itself!) 

    calling Math.random() - since the value cannot be reliably repeated
