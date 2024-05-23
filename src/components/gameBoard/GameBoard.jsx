import React, { useState } from 'react'


function GameBoard({onSelectSquare , board }) {

  return (

        <ol id='game-board' >

            {board.map( (row,rowIndex) => (

                <li key={rowIndex}> 
                
                    <ol>

                    {row.map((playerSymbole, colIndex)=> (

                            <button  
                                key={colIndex} 
                                disabled={ playerSymbole !== null} 
                                onClick={()=>onSelectSquare(rowIndex , colIndex)}
                                > 

                                {playerSymbole} 

                                </button>
                            
                            ) )}
                            
                </ol>
                
               </li>
                        
            ))   }
            
        </ol>

  )
}

export default GameBoard