import {Gameboard} from './Gameboard'

test('Return Gamboard size to be 100 ', () => {
 
    const newgameboard= Gameboard()
    expect(newgameboard.box.length).toEqual(100)
  });