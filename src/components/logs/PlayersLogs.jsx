import React from 'react'

function PlayersLogs({turns}) {

  return (

    <ol id="log">
        
        {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`} >

                <p> {turn.playerSymbole} select row number {turn.square.row +1} , col number {turn.square.col +1}</p>
        </li>)}

    </ol>
  )
}

export default PlayersLogs