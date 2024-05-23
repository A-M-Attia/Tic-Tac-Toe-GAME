import React, { useState } from 'react'

function PlayerInfo({initialPlayerName , playerSymbol , isActive , onSave }) {

    const [playerName , setPlayerName] = useState(initialPlayerName)

    const [isEdit , setIsEdit] = useState(false)


    const handleClick = () =>{

        setIsEdit(pre => !pre)

        if(isEdit){
                onSave(playerName , playerSymbol)
        }
    }

    const handleChange = (e)=>{
        
        setPlayerName( e.target.value)
    }

    let editablePlayerName = <span className='player-name'> {playerName} </span>

    if(isEdit){
     
        editablePlayerName =   <input type='text' required value={playerName} onChange={handleChange}/>
    }

  return (
    
    <li className={isActive ? "active" : undefined}> 
            
    <span className='player'>

       { editablePlayerName}

       <span className='player-symbol'> {playerSymbol} </span> 

   </span>

   <button onClick={handleClick}> { isEdit ?  "Save" : "Edit"  } </button>

       
   </li>

  )
}

export default PlayerInfo