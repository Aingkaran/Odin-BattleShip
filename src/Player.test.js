import { ship} from './ships'
import {Gameboard} from './Gameboard'
import {Player} from './Player'



test('Check if fleetDestroyed funciton returns treu when all ships are destroyed', () => {
 
    const smallShip2= ship(2,"S2")
    const mediumShip=ship(3,"M")
    const mediumShip2=ship(3,"M2")

    const AingkaranGame= Player("Aingkaran")
    const ComputerGame= Player("AI")

    AingkaranGame.PlayerBoard.placeShip(smallShip2)
    AingkaranGame.PlayerBoard.placeShip(mediumShip)
    AingkaranGame.PlayerBoard.placeShip(mediumShip2)

    ComputerGame.PlayerBoard.placeShip(smallShip2)
    ComputerGame.PlayerBoard.placeShip(mediumShip)
    ComputerGame.PlayerBoard.placeShip(mediumShip2)


    ComputerGame.attackEnemy(AingkaranGame.PlayerBoard)
    ComputerGame.attackEnemy(AingkaranGame.PlayerBoard)

    ComputerGame.attackEnemy(AingkaranGame.PlayerBoard)

    console.log(AingkaranGame.PlayerBoard.box)

    expect(playerGameboard.fleetDestroyed()).toEqual(true)
  });



