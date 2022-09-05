// const animal = {
//     eats: true,

// };

// const dog = Object.create(animal);
// dog.barks = true;
// console.log(dog);

// const cat = Object.create(animal);
// cat.meows = true;
// console.log(cat);

const Hero = function(name, xp){
    this.name = name;
    this.xp = xp;
}

Hero.prototype.gainXP = function(amount){
    this.xp += amount;
    console.log(`${this.name} отримав ${amount} досвіду`);
}

const hero = new Hero('Vlad', 1000);
hero.gainXP(500);
console.log(hero);