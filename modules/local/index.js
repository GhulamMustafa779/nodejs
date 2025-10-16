const superHero = require("./super-hero");

const batman = new superHero("Batman");
console.log(batman.getName());
batman.setName("Batman 2");
console.log(batman.getName());

const superman = new superHero("Superman");
console.log(superman.getName());
superman.setName("Superman 2");
console.log(superman.getName());

console.log(batman === superman);