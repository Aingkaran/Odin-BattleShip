import {Gameboard} from './Gameboard'
import { ship} from './ships'

test('Return Gamboard size to be 100 ', () => {
 
    const newgameboard= Gameboard()
    expect(newgameboard.box.length).toEqual(100)
  });


  test('Check if ships are added ', () => {
 
    const smallShip2= ship(2,"S2")
    const playerGameboard= Gameboard()
    playerGameboard.pushShip(smallShip2)
    playerGameboard.placeShip()
    let count = playerGameboard.box.filter(x => x.shiptype == smallShip2.shiptype).length;

    expect(count).toEqual(2)
  });


  test('Check if two ships are added ', () => {
 
    const smallShip2= ship(2,"S2")
    const playerGameboard= Gameboard()
    playerGameboard.pushShip(smallShip2)

    const mediumShip=ship(3,"M")
    playerGameboard.pushShip(mediumShip)
    playerGameboard.placeShip()

    console.log(playerGameboard.box)

    let count = playerGameboard.box.filter(x => x.shiptype == smallShip2.shiptype).length;
    let count2 = playerGameboard.box.filter(x => x.shiptype == mediumShip.shiptype).length;
    let countTotal = count +count2
    expect(countTotal).toEqual(5)
  });



  test('Check if receiveAttack function changes shipArray list', () => {
 
    const smallShip2= ship(2,"S2")
    const playerGameboard= Gameboard()
    playerGameboard.pushShip(smallShip2)
    playerGameboard.placeShip()


    playerGameboard.box[1] = smallShip2.shipContainer[0]
    playerGameboard.box[2] = smallShip2.shipContainer[1]

                       

    playerGameboard.receiveAttack(1)
    playerGameboard.receiveAttack(2)

    expect(playerGameboard.shipArray[0].isSunk()).toEqual(true)
  });


  
  test('Check if receiveAttack says it is hit ', () => {
 
    const smallShip2= ship(2,"S2")
    const playerGameboard= Gameboard()
    playerGameboard.pushShip(smallShip2)
    playerGameboard.placeShip()


    playerGameboard.box[1] = smallShip2.shipContainer[0]
    playerGameboard.box[2] = smallShip2.shipContainer[1]

                       

    playerGameboard.receiveAttack(1)
    playerGameboard.receiveAttack(2)

    expect(playerGameboard.box[1]).toEqual("hit")
  });



  test('Check if fleetDestroyed funciton returns false when all ships are not destroyed', () => {
 
    const smallShip2= ship(2,"S2")
    const mediumShip=ship(3,"M")
    const mediumShip2=ship(3,"M2")

    const playerGameboard= Gameboard()
    playerGameboard.pushShip(smallShip2)
    playerGameboard.pushShip(mediumShip)
    playerGameboard.pushShip(mediumShip2)

    playerGameboard.placeShip()


    playerGameboard.shipArray[0].hit(0)
    playerGameboard.shipArray[0].hit(1)

    playerGameboard.shipArray[1].hit(0)
    playerGameboard.shipArray[1].hit(1)
    playerGameboard.shipArray[1].hit(2)

    playerGameboard.shipArray[2].hit(0)
    playerGameboard.shipArray[2].hit(1)


    expect(playerGameboard.fleetDestroyed()).toEqual(false)
  });


  test('Check if fleetDestroyed funciton returns treu when all ships are destroyed', () => {
 
    const smallShip2= ship(2,"S2")
    const mediumShip=ship(3,"M")
    const mediumShip2=ship(3,"M2")

    const playerGameboard= Gameboard()
    playerGameboard.pushShip(smallShip2)
    playerGameboard.pushShip(mediumShip)
    playerGameboard.pushShip(mediumShip2)

    playerGameboard.placeShip()


    playerGameboard.shipArray[0].hit(0)
    playerGameboard.shipArray[0].hit(1)

    playerGameboard.shipArray[1].hit(0)
    playerGameboard.shipArray[1].hit(1)
    playerGameboard.shipArray[1].hit(2)

    playerGameboard.shipArray[2].hit(0)
    playerGameboard.shipArray[2].hit(1)
    playerGameboard.shipArray[2].hit(2)

    expect(playerGameboard.fleetDestroyed()).toEqual(true)
  });
