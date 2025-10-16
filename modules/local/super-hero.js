class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// module.exports = new SuperHero("Batman"); // Only one instance is created
// module.exports = SuperHero; // New instance is created every time
// export default new SuperHero("Batman");
export default SuperHero;