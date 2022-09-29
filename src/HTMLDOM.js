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

    const Name= victim.PlayerName

    if (Name=="AI"){   
        const PlayerBoard= document.querySelector(".ComputerBoard")
        const boxPlayer = PlayerBoard.querySelectorAll(".boxes")
        boxPlayer.forEach((box)=>{
            box.addEventListener('click', (e)=>{
                victim.PlayerBoard.receiveAttack(e.target.dataset.position)
                console.log(victim.PlayerBoard.box)
    
                if (victim.PlayerBoard.fleetDestroyed()){
                    console.log("PLAYER WINS")
                }
                
            })
        })
    }

    else {
        const PlayerBoard= document.querySelector(".PlayerBoard")
        const boxPlayer = PlayerBoard.querySelectorAll(".boxes")
        boxPlayer.forEach((box)=>{
            box.addEventListener('click', (e)=>{
                victim.PlayerBoard.receiveAttack(e.target.dataset.position)
                console.log(victim.PlayerBoard.box)
            if (victim.PlayerBoard.fleetDestroyed()){
                console.log("COMPUTER WINS")
            }
        
            })
        })
    }

    
    
    
}


const GameLoop=(Player, Computer)=>{
    let counter= 0


        if (counter=0){
            DOMattack(Computer)
            counter=counter+1
            console.log(counter)
        }

        else{
            DOMattack(Player)
            counter=counter-1
            console.log(counter)
        }



    

   

}





export {createGrid, placeDOMShips, DOMattack,GameLoop}