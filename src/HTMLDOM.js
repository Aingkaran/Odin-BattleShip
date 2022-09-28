import { ship} from './ships'
import {Gameboard} from './Gameboard'
import {Player} from './Player'


const createGrid=(DOMelement, Playerboard)=>{
    const grid= document.querySelector(String(DOMelement))

    for(let i=0;i<100;i++){
        const oneGrid= document.createElement('div')
        oneGrid.setAttribute("class","boxes")
        oneGrid.setAttribute("id",String(Playerboard.PlayerName) +String(i))
        oneGrid.setAttribute("data-position",i)



        grid.appendChild(oneGrid)
    }

  

}

const placeDOMShips=(Player)=>{

    for (let i=0; i<Player.PlayerBoard.box.length;i++){

        if (Player.PlayerBoard.box[i]!=""){
            const shipBox = document.getElementById(String(Player.PlayerName) + String(i))
            shipBox.setAttribute("type",Player.PlayerBoard.box[i].shiptype)
            shipBox.setAttribute("id","ship")
        }

    }

}


const DOMattack=(victim)=>{
    const boxPlayer = document.querySelectorAll(".boxes")
    
    
    boxPlayer.forEach((box)=>{
        box.addEventListener('click', (e)=>{
            victim.PlayerBoard.receiveAttack(e.target.dataset.position)
            console.log(victim.PlayerBoard.box)
        })
    })
}





export {createGrid, placeDOMShips, DOMattack}