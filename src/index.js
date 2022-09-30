import './style.css';
import { ship} from './ships'
import {Gameboard} from './Gameboard'
import {Player} from './Player'
import {createGrid, placeDOMShips, DOMattack} from './HTMLDOM'
import {NewGame, resetGame} from './GameControl'



resetGame()
NewGame()