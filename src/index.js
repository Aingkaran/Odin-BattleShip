import './style.css';
import { ship} from './ships'


const newship= ship(4);

console.log(newship.length)
console.log(newship.shipContainer)


newship.hit(0)
newship.hit(1)
newship.hit(3)

console.log(newship.shipContainer)
console.log(newship.isSunk())

newship.hit(2)
console.log(newship.isSunk())
