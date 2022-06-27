import * as C from './styles'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const ListaUnica = () => {
  
  const [arrayPlayers, setArrayPlayers] = useState([])
  const navigate = useNavigate();

  const addPlayer = () => {
    setArrayPlayers([...arrayPlayers, document.getElementById('inputPlayer').value])
    localStorage.setItem('players', JSON.stringify([...arrayPlayers, document.getElementById('inputPlayer').value]))
  }

  const removePlayer = (i) => {
    arrayPlayers.splice(i,1)
    setArrayPlayers([...arrayPlayers])
    localStorage.setItem('players', JSON.stringify([...arrayPlayers]))
  }
  
  useEffect(() => {
    if(localStorage.getItem('players') !== null){
      setArrayPlayers(JSON.parse([localStorage.getItem('players')]))
    }  
  },[])
  
  return (
    <C.Container>
      <C.Header>
        Lista Pings
      </C.Header>
      <C.Button mr='280' onClick={()=> navigate('/') }>
        Voltar
      </C.Button>
      <C.Form>
        <input id='inputPlayer' type="text" placeholder='Adicionar Jogador'/>
        <C.Button onClick={() => addPlayer()}>Adicionar na Lista</C.Button>
      </C.Form>
      <C.List>
        <C.ListPlayer>
          {arrayPlayers.map((player,key) => 
            <C.Players>{player} - Esperando pra jogar <C.ButtonClose onClick={() => removePlayer(key)}>X</C.ButtonClose> </C.Players>
          )}
        </C.ListPlayer>
        
      </C.List>
    </C.Container>
  )
}


export default ListaUnica;