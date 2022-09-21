const ship =(size,type)=>{
    let shiptype = String(type)

    let container= ()=>{
        let shipsize= []

        for (let i=0;i<size;i++){
            shipsize.push({"shiptype": type, "position": i})
        }
        return shipsize
    }
    let shipContainer = container()
    let length = container().length

    const hit=(position)=>{
        shipContainer[position]="hit"
    }
    

    const isSunk=()=>{
        let count=0
        for (let i=0;i<length;i++){
            if (shipContainer[i]=="hit"){
                count=count+1
            }
        }
        if (count==length){
            return true 
        }
        else {
            return false
        }
    }

return {container, length, hit, isSunk, shipContainer,shiptype}

}

export {ship}