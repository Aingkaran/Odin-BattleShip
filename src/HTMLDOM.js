import { ship} from './ships'
import {Gameboard} from './Gameboard'
import {Player} from './Player'


const createGrid=(DOMelement, Playerboard)=>{
    const grid= document.querySelector(String(DOMelement))

    for(let i=0;i<100;i++){
        const oneGrid= document.createElement('div')
        oneGrid.setAttribute("class","boxes")
        oneGrid.setAttribute("id",String(Playerboard.PlayerName) +String(i))


        grid.appendChild(oneGrid)
    }

  

}

const placeDOMShips=(Player)=>{

    for (let i=0; i<Player.PlayerBoard.box.length;i++){

        if (Player.PlayerBoard.box[i]!=""){
            const shipBox = document.getElementById(String(Player.PlayerName) + String(i))
            shipBox.setAttribute("id","ship")
        }

    }

}





export {createGrid, placeDOMShips}