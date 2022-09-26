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

PlayerOne.PlayerBoard.placeShip(smallShip2)
PlayerOne.PlayerBoard.placeShip(mediumShip)
PlayerOne.PlayerBoard.placeShip(mediumShip2)
PlayerOne.PlayerBoard.placeShip(largeShip)


Computer.PlayerBoard.placeShip(smallShip2)
Computer.PlayerBoard.placeShip(mediumShip)
Computer.PlayerBoard.placeShip(mediumShip2)
Computer.PlayerBoard.placeShip(largeShip)

console.log(PlayerOne.PlayerBoard.box)
console.log(Computer.PlayerBoard.box)
console.log(Computer.PlayerBoard.shipArray)
console.log(PlayerOne.PlayerBoard.shipArray)


placeDOMShips(PlayerOne)
placeDOMShips(Computer)