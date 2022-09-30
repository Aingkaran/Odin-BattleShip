import './style.css';
import { ship} from './ships'
import {Gameboard} from './Gameboard'
import {Player} from './Player'
import {createGrid, placeDOMShips, DOMattack} from './HTMLDOM'


const resetGame= ()=>{
    const resetBtn= document.querySelector(".NewGame")
    const ComputerBoard= document.querySelector(".ComputerBoard")
    const boxAI = ComputerBoard.querySelectorAll(".boxes")

    const PlayerBoard= document.querySelector(".PlayerBoard")
    const boxPlayer = PlayerBoard.querySelectorAll(".boxes")

    resetBtn.addEventListener('click',()=>{
        while (ComputerBoard.firstChild) {
            ComputerBoard.removeChild(ComputerBoard.firstChild);
        }

        while (PlayerBoard.firstChild) {
            PlayerBoard.removeChild(PlayerBoard.firstChild);
        }

        NewGame()

    })



}



const NewGame=()=>{
    const PlayerOne = Player("Aingkaran")

    const Computer = Player("AI")

    createGrid(".PlayerBoard", PlayerOne)
    createGrid(".ComputerBoard", Computer)

    
    const smallShip2= ship(2,"S2")
    const mediumShip=ship(3,"M")
    const mediumShip2=ship(3,"M2")
    const largeShip =ship(4,"L")
    const largeShip2 =ship(4,"L2")


    PlayerOne.PlayerBoard.pushShip(smallShip2)
    PlayerOne.PlayerBoard.pushShip(mediumShip)
    PlayerOne.PlayerBoard.pushShip(mediumShip2)
    PlayerOne.PlayerBoard.pushShip(largeShip)
    PlayerOne.PlayerBoard.pushShip(largeShip2)


    Computer.PlayerBoard.pushShip(smallShip2)
    Computer.PlayerBoard.pushShip(mediumShip)
    Computer.PlayerBoard.pushShip(mediumShip2)
    Computer.PlayerBoard.pushShip(largeShip)
    Computer.PlayerBoard.pushShip(largeShip2)

    PlayerOne.PlayerBoard.placeShip()
    Computer.PlayerBoard.placeShip()




    placeDOMShips(PlayerOne)
    placeDOMShips(Computer)

    DOMattack(PlayerOne,Computer)

    




}


export {resetGame, NewGame}