
import View from "./ttt-view.js"
import Game from "../ttt_node/game.js"

document.addEventListener("DOMContentLoaded", () => {
 const game = new Game()
 const ttt = document.querySelector('.ttt')
 const view = new View(game, ttt)
});