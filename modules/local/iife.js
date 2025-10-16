
// Immediately Invoked Function Expression (IIFE)
(function(message){
    const superHero = "Batman"
    console.log(message, superHero);
})('Hey');

(function(message){
    const superHero = "Superman"
    console.log(message, superHero);
})('Hello');

// We can have same named variables in different IIFEs
// modules and imported like this in a file thats why same named vaiable doesn't cause an error