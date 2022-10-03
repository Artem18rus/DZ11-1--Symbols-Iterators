const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Демон',
  type: 'Daemon',
  health: 40,
  level: 5,
  attack: 60,
  defence: 5,
};

const char3 = {
  name: 'Маг',
  type: 'Magician',
  health: 80,
  level: 3,
  attack: 65,
  defence: 11,
};

const person = [char1, char2, char3];

class Team {
  constructor() {
    this.person = person;
  }

  [Symbol.iterator]() {
    let index = -1;
    const data = this.person;
    return {
      next: () => ({
        value: data[++index],
        done: !(index in data),
      }),
    };
  }
}
const obj = new Team();
for (const item of obj) {
  console.log(item);
}
