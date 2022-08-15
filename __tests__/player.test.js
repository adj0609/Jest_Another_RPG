const Potion = require('../lib/Potion');
jest.mock('../lib/Potion');
console.log(new Potion());
const Player = require('../lib/Player');
test('creates a player object', () =>{
    const player = new Player('Andrea');

    expect(player.name).toBe('Andrea');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );
});