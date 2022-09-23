import { ship} from './ships'
import {Gameboard} from './Gameboard'


const Player =(name)=>{

    const PlayerBoard= Gameboard()
    const PlayerName= "AI"

    const attackEnemy =(victim,playerAttack)=>{

        if (PlayerName=="AI"){
            let attackCoord = Math.floor(Math.random() * 100);
            victim.receiveAttack(attackCoord)
        }

        else {
            victim.receiveAttack(playerAttack)

        }
    }



    

}