import PlayerInfo from './PlayerInfo'

function Players({activeplayer , onSave}) {

  return (

    <ol id='players' className='highlight-player'>
        
        <PlayerInfo onSave={onSave} initialPlayerName = "player 1"  playerSymbol="X" isActive={activeplayer === "X"}/>

        <PlayerInfo onSave={onSave} initialPlayerName = "player 2"  playerSymbol="O" isActive={activeplayer === "O"}/>

        
    </ol>
  )
}

export default Players