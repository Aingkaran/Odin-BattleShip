
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


    const pushShip = (ship)=>{
        shipArray.push(ship)

    }

    const placeShip= ()=>{
        
        for (let i=0;i<shipArray.length;i++){
            let arrayPosition = Math.floor(Math.random() * 100);
            let randomOrientation= Math.floor(Math.random() * 2);
            if (box[arrayPosition]==""){
                    for (let j=0; j<shipArray[i].length; j++){
                        box[arrayPosition]= shipArray[i].shipContainer[j]
                        arrayPosition=arrayPosition+1

                    }

            }

           
                
        }

          
    }

       

    

    const receiveAttack =(attackPosition)=>{
        if(box[attackPosition]!= "") {
            let shipHit= box[attackPosition].shiptype

            shipArray.forEach((ship)=>{
                if (ship.shiptype==shipHit){
                    ship.hit(box[attackPosition].position)
                  
                }
            })
            box[attackPosition] ="hit"


        }

        else {
            box[attackPosition] ="missed"

        }

    }

    const fleetDestroyed=()=>{
        let shipsDestroyed =0
        for (let i=0;i<shipArray.length;i++){
            if (shipArray[i].isSunk()==true){
                shipsDestroyed= shipsDestroyed+1
            }
        }
        if (shipsDestroyed==shipArray.length){
            return true
        }
        else{
            return false
        }
    }

    

return {box, placeShip,receiveAttack, shipArray, fleetDestroyed, pushShip}

}



export {Gameboard}