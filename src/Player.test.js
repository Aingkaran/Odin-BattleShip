import { ship} from './ships'
import {Gameboard} from './Gameboard'
import {Player} from './Player'



test('Check if attackEnemy works from the player side ', () => {
 
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

    AingkaranGame.attackEnemy(ComputerGame.PlayerBoard,3)



    expect(ComputerGame.PlayerBoard.box[[3]]).toEqual("missed")
  });


  test('Check if attackEnemy works from the computer AI side ', () => {
 
    const smallShip2= ship(2,"S2")
    const mediumShip=ship(3,"M")
    const mediumShip2=ship(3,"M2")

    const AingkaranGame= Player("Aingkaran")
    const ComputerGame= Player("AI")


    for(let i=0;i<99;i++){
        AingkaranGame.PlayerBoard.box[i]= "missed"
    }
    console.log(AingkaranGame.PlayerBoard.box)

    ComputerGame.attackEnemy(AingkaranGame.PlayerBoard)

    expect(AingkaranGame.PlayerBoard.box[[99]]).toEqual("missed")
  });


