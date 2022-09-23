import { ship} from './ships'
import {Gameboard} from './Gameboard'


const Player =(name)=>{

    const PlayerBoard= Gameboard()
    const PlayerName= name

    const attackEnemy =(victim,playerAttack="0")=>{

        if (PlayerName=="AI"){
            let attackCoord = Math.floor(Math.random() * 100);
            if (victim.box[attackCoord]=="hit"){
                attackEnemy(victim)
            }
            else {
                victim.receiveAttack(attackCoord)

            }
        }

        else {
            victim.receiveAttack(playerAttack)

        }
    }

    return {PlayerBoard, PlayerName, attackEnemy}


}



export {Player}