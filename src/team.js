export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    const entries = this.characters;
    let index = 0;
    let result;

    return {
      next() {
        if (index < entries.length) {
          result = {
            value: entries[index],
            done: false,
          };
          index += 1;
        } else {
          result = {
            value: undefined,
            done: true,
          };
        }
        return result;
      },
    };
  }
}
