class View {
  constructor(game, el) {
    this.game = game
    this.el = el
    this.setupBoard()
  }
  
  setupBoard() {
    let gameBoard = document.createElement("ul")
    gameBoard.classList.add("game-board")
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
      let box = document.createElement("li")
      box.classList.add("box")
      gameBoard.appendChild(box)
      box.dataset.position=JSON.stringify([i,j])
    }
    }
    this.el.appendChild(gameBoard)
    gameBoard.addEventListener("click", this.handleClick.bind(this))
  }
  
  handleClick(e) {
    let pos = JSON.parse(e.target.dataset.position)
    e.target.style.backgroundColor = "white"
    e.target.style.fontSize = "180px"
    e.target.innerHTML = this.game.currentPlayer
    this.game.playMove(pos)
    if(this.game.isOver()){
      setTimeout(()=>alert(`Game Over!!!! The winner is ${this.game.winner()}`),500)
      
    }
    }

  makeMove(square) {

  }
  
  handleGameOver() {

  }
}

export default View;