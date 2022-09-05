class Hero {
    static count = 0;

    #hp = 0;

    constructor(name, xp, hp, baseLvl) {
        Hero.count++;

        this.name = name;
        this.xp = xp;
        this.#hp = hp;
        this.lvl = baseLvl;
        this.position = {
            x: 0,
            y: 0,
        };
    }

    takeDamage(from, weapon) {
        this.#hp -= weapon.damage;
        console.log(`${from.name} атакує ${this.name} за допомогою ${weapon.name} і наносить ${weapon.damage} шкоди`);
        console.log(`У ${this.name} залишилось ${this.#hp} здоров'я`);
    }

    get hp() {
        return this.#hp;
    }

    set hp(value){
        if(value > 20){
            console.log("Здоров'я не може бути більше 20")
        } else{
            this.#hp = value;
        }
    }

    gainXP(amount) {
        this.xp += amount;
        console.log(`${this.name} отримав ${amount} досвіду`);
        if (this.xp >= 1000) {
            this.increaseLvl();
        }
    }

    increaseLvl() {
        this.xp = 0;
        this.lvl++;
        console.log(`${this.name} отримав ${this.lvl} рівень`)
    }

    move(moveX, moveY) {
        this.position.x += moveX;
        this.position.y += moveY;
        console.log(`${this.name} пішов до x : ${this.position.x}, y : ${this.position.y}`)
    }
}

class Warrior extends Hero {
    constructor(name, xp, hp, baseLvl, weapon) {
        super(name, xp, hp, baseLvl);
        this.weapon = weapon;
    }

    attack(hero) {
        hero.takeDamage(this, this.weapon);
    }
}

class Mage extends Hero {
    constructor(name, xp, hp, baseLvl, spell) {
        super(name, xp, hp, baseLvl);
        this.spell = spell;
    }

    castSpell(hero) {
        hero.takeDamage(this, this.spell);
    }
}

class Weapon {
    constructor(name, damage, type){
        this.name = name;
        this.damage = damage;
        this.type = type;
    }
}

class Spell {
    constructor(name, damage, element){
        this.name = name;
        this.damage = damage;
        this.element = element;
    }
}

const weapon1 = new Weapon('Ескалібур', 8, 'Меч');

const vsevolod = new Warrior('Vsevolod', 500, 20, 0, weapon1);
vsevolod.gainXP(500);
vsevolod.move(-5, 5);

const spell1 = new Spell('Закляття', 12, 'Вогонь')

const vlad = new Mage('Vlad', 700, 15, 2, spell1);


vsevolod.attack(vlad);
vlad.castSpell(vsevolod);


//  Дз
// класи weapon spell
// виконав