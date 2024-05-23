import { useState } from "react"
import Players from "./components/players/Players"
import GameBoard from "./components/gameBoard/GameBoard"
import PlayersLogs from "./components/logs/PlayersLogs"
import GameOver from "./components/gameOver/GameOver"
import {WINNING_COMBINATIONS} from "./winningCombinatios"



const initialGameBoard = [
  [null , null , null],
  [null , null , null],
  [null , null , null],
]


const activeplayer = (gameturn) => {
  let currentPlayer = "X"
  if( gameturn.length > 0 && gameturn[0].playerSymbole === "X") currentPlayer = "O"
  return currentPlayer
}



function App() {
  
  const [gameTurn , setGameTurn] = useState([])
  const [playerdata , setPlayerdata] = useState({
    X : "player1" ,
    O: "player2"
  })


  const activePlayer = activeplayer(gameTurn)

  let gameBoard = [...initialGameBoard.map(arr => [...arr])];

  for (const turn of gameTurn){
    
      const {square , playerSymbole} = turn
      const {row , col} = square

      gameBoard[row][col] = playerSymbole

  }

  let winner;

    for (const arr of WINNING_COMBINATIONS) {

      let firstSquareSymbole =   gameBoard[arr[0].row][arr[0].column]
      let secondSquareSymbole =  gameBoard[arr[1].row][arr[1].column]
      let thirdSquareSymbole =   gameBoard[arr[2].row][arr[2].column]

        if( (firstSquareSymbole ) && firstSquareSymbole === secondSquareSymbole && firstSquareSymbole === thirdSquareSymbole){

          winner = playerdata[firstSquareSymbole]
        }
      
    }

    const hasDraw = (gameTurn.length == 9 && !winner)

  const handleSelectSquare = (rowIndex, colIndex) => {

    setGameTurn(pre => {

      let currentPlayer = activeplayer(pre)
      const newTurns = [{square : {row: rowIndex, col : colIndex}, playerSymbole : currentPlayer}, ...pre]
      return newTurns
    })

  }

  const handleRestart = () => { return setGameTurn([]) }

const handleSave = (playerName , playerSymbole) => {

  setPlayerdata ( pre => {
    return {
      ...pre,
      [playerSymbole] : playerName
    }
  })

}

  return (

    <main>
      
      <div id="game-container">

        <Players activeplayer={activePlayer} onSave={handleSave} />

        { (winner || hasDraw ) && <GameOver winner={winner}  onRematch= {handleRestart} /> }
        
        <GameBoard onSelectSquare={handleSelectSquare}  turns={gameTurn} board={gameBoard} />

      </div>

      <PlayersLogs turns ={gameTurn}/>

    </main>
    
  )
}

export default App
