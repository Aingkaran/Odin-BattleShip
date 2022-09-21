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
    let count = playerGameboard.box.filter(x => x.shiptype == smallShip2.shiptype).length;

    expect(count).toEqual(2)
  });


  test('Check if two ships are added ', () => {
 
    const smallShip2= ship(2,"S2")
    const playerGameboard= Gameboard()
    playerGameboard.placeShip(smallShip2)
    const mediumShip=ship(3,"M")
    playerGameboard.placeShip(mediumShip)

    let count = playerGameboard.box.filter(x => x.shiptype == smallShip2.shiptype).length;
    let count2 = playerGameboard.box.filter(x => x.shiptype == mediumShip.shiptype).length;
    let countTotal = count +count2
    expect(countTotal).toEqual(5)
  });



  test('Check if receiveAttack function changes shipArray list', () => {
 
    const smallShip2= ship(2,"S2")
    const playerGameboard= Gameboard()
    playerGameboard.placeShip(smallShip2)

    playerGameboard.box[1] = smallShip2.shipContainer[0]
    playerGameboard.box[2] = smallShip2.shipContainer[1]

                       

    playerGameboard.receiveAttack(1)
    playerGameboard.receiveAttack(2)

    expect(playerGameboard.shipArray[0].isSunk()).toEqual(true)
  });


  
  test('Check if receiveAttack says it is hit ', () => {
 
    const smallShip2= ship(2,"S2")
    const playerGameboard= Gameboard()
    playerGameboard.placeShip(smallShip2)

    playerGameboard.box[1] = smallShip2.shipContainer[0]
    playerGameboard.box[2] = smallShip2.shipContainer[1]

                       

    playerGameboard.receiveAttack(1)
    playerGameboard.receiveAttack(2)

    expect(playerGameboard.box[1]).toEqual("hit")
  });

