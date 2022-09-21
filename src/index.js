import './style.css';
import { ship} from './ships'
import {Gameboard} from './Gameboard'




const longShip= ship(4,"L")
const mediumShip=ship(3,"M")
const smallShip1= ship(2,"S1")
const smallShip2= ship(2,"S2")

const playerGameboard= Gameboard()

console.log(playerGameboard.box)

playerGameboard.placeShip(longShip)
playerGameboard.placeShip(mediumShip)
playerGameboard.placeShip(smallShip1)
playerGameboard.placeShip(smallShip2)

console.log(playerGameboard.box)
playerGameboard.receiveAttack(43)
console.log(playerGameboard.box)
