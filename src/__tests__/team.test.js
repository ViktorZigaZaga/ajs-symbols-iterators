import Character from '../character';
import Team from '../team';

const char1 = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 1,
  attack: 40,
  defence: 10,
};

const char2 = {
  name: 'Лучник2',
  type: 'Bowman',
  health: 60,
  level: 2,
  attack: 50,
  defence: 10,
};

const char3 = {
  name: 'Лучник3',
  type: 'Bowman',
  health: 70,
  level: 3,
  attack: 60,
  defence: 10,
};

test('test for Character', () => {
  const expected = char1;
  const received = new Character(expected);
  expect(received).toEqual(expected);
});

test('test for Team', () => {
  const expected = {
    characters: [
      new Character(char1),
      new Character(char2),
      new Character(char3),
    ],
  };
  const received = new Team(new Character(char1), new Character(char2), new Character(char3));
  let i = 0;
  for (const item of received) {
    expect(item).toEqual(expected.characters[i]);
    i += 1;
  }
});
