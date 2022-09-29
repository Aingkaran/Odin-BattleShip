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

        if (Player.PlayerBoard.box[i]!= ""){
            const shipBox = document.getElementById(String(Player.PlayerName) + String(i))
            shipBox.setAttribute("type",Player.PlayerBoard.box[i].shiptype)
            shipBox.setAttribute("id","ship")
        }

    }

}


const DOMattack=(Player, victim)=>{

    const Name= victim.PlayerName

    if (Name=="AI"){   
        const ComputerBoard= document.querySelector(".ComputerBoard")
        const boxAI = ComputerBoard.querySelectorAll(".boxes")

        const PlayerBoard= document.querySelector(".PlayerBoard")
        const boxPlayer = PlayerBoard.querySelectorAll(".boxes")


        boxAI.forEach((box)=>{
            box.addEventListener('click', (e)=>{
               
                
                Player.attackEnemy(victim.PlayerBoard, e.target.dataset.position)
                console.log(victim.PlayerBoard.box)

                if (victim.PlayerBoard.box[e.target.dataset.position]=="missed"){
                    box.setAttribute("id","missed")

                }

                else if (victim.PlayerBoard.box[e.target.dataset.position]=="hit"){
                    box.setAttribute("id","hit")

                }

                if (victim.PlayerBoard.fleetDestroyed()){
                    console.log("PLAYER WINS")
                }

                else if (Player.PlayerBoard.fleetDestroyed()){
                    console.log("COMPUTER WINS")
                }
    
               
                const PlayerBoard= document.querySelector(".PlayerBoard")
                victim.attackEnemy(Player.PlayerBoard)
                console.log(Player.PlayerBoard.box)

              
            })
            
        })
    }

 

 
    
}








export {createGrid, placeDOMShips, DOMattack}