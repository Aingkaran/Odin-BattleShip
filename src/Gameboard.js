
import {ship} from './ships'


const Gameboard =()=>{

    let shipArray=[]


    const box =[ "","","","","","","","","",""
                ,"","","","","","","","","",""
                ,"","","","","","","","","",""
                ,"","","","","","","","","",""
                ,"","","","","","","","","",""
                ,"","","","","","","","","",""
                ,"","","","","","","","","",""
                ,"","","","","","","","","",""
                ,"","","","","","","","","",""
                ,"","","","","","","","","",""]

    const placeShip= (ship)=>{
        shipArray.push(ship)
        let arrayPosition = Math.floor(Math.random() * 100);
        let arraydirection= -1;
        for (let i=0;i<ship.length;i++){
            box[arrayPosition]= ship.shiptype
            arrayPosition=arrayPosition+1
        }
    }

    const receiveAttack =(attackPosition)=>{
        if(box[attackPosition]!= "") {
            shipHit= box[attackPosition]
            box[attackPosition] ="hit"

            shipArray.forEach((ship)=>{
                if (ship.shiptype==shipHit){
                    ship.hit(0)
                }
            })

        }

        else {
            box[attackPosition] ="hit"

        }

    }

    

return {box, placeShip,receiveAttack}

}



export {Gameboard}