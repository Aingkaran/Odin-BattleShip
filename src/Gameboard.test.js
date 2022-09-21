import {Gameboard} from './Gameboard'
import { ship} from './ships'

test('Return Gamboard size to be 100 ', () => {
 
    const newgameboard= Gameboard()
    expect(newgameboard.box.length).toEqual(100)
  });


  test('Check if ships are added ', () => {
 
    const smallShip2= ship(2,"S2")
    const playerGameboard= Gameboard()
    playerGameboard.placeShip(smallShip2)
    let count = playerGameboard.box.filter(x => x == smallShip2.shiptype).length;

    expect(count).toEqual(2)
  });


  test('Check if two ships are added ', () => {
 
    const smallShip2= ship(2,"S2")
    const playerGameboard= Gameboard()
    playerGameboard.placeShip(smallShip2)
    const mediumShip=ship(3,"M")
    playerGameboard.placeShip(mediumShip)

    let count = playerGameboard.box.filter(x => x == smallShip2.shiptype).length;
    let count2 = playerGameboard.box.filter(x => x == mediumShip.shiptype).length;
    let countTotal = count +count2
    expect(countTotal).toEqual(5)
  });

  