import './style.css';
import { ship} from './ships'
import {Gameboard} from './Gameboard'
import {Player} from './Player'
import {createGrid, placeDOMShips} from './HTMLDOM'




const PlayerOne = Player("Aingkaran")

const Computer = Player("AI")

createGrid(".PlayerBoard", PlayerOne)
createGrid(".ComputerBoard", Computer)

 
const smallShip2= ship(2,"S2")
const mediumShip=ship(3,"M")
const mediumShip2=ship(3,"M2")
const largeShip =ship(4,"L")

PlayerOne.PlayerBoard.pushShip(smallShip2)
PlayerOne.PlayerBoard.pushShip(mediumShip)
PlayerOne.PlayerBoard.pushShip(mediumShip2)
PlayerOne.PlayerBoard.pushShip(largeShip)


Computer.PlayerBoard.pushShip(smallShip2)
Computer.PlayerBoard.pushShip(mediumShip)
Computer.PlayerBoard.pushShip(mediumShip2)
Computer.PlayerBoard.pushShip(largeShip)

PlayerOne.PlayerBoard.placeShip()
Computer.PlayerBoard.placeShip()




console.log(PlayerOne.PlayerBoard.box)
console.log(Computer.PlayerBoard.box)
console.log(Computer.PlayerBoard.shipArray)
console.log(PlayerOne.PlayerBoard.shipArray)


placeDOMShips(PlayerOne)
placeDOMShips(Computer)