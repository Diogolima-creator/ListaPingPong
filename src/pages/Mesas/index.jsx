import * as C from './styles'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Mesas = () => {
 
  const [arrayPlayers1, setArrayPlayers1] = useState([])
  const [arrayPlayers2, setArrayPlayers2] = useState([])
  const navigate = useNavigate();

  const addPlayer = (num) => {
    if(num === 0 ){
      setArrayPlayers1([...arrayPlayers1, document.getElementById('inputPlayer1').value])
      localStorage.setItem('playersMesa1', JSON.stringify([...arrayPlayers1, document.getElementById('inputPlayer1').value]))
      document.getElementById('inputPlayer1').value = ''
    }else{
      setArrayPlayers2([...arrayPlayers2, document.getElementById('inputPlayer2').value])
      localStorage.setItem('playersMesa2', JSON.stringify([...arrayPlayers2, document.getElementById('inputPlayer2').value]))
      document.getElementById('inputPlayer2').value = ''
    }
  }

  const removePlayer = (num,i) => { 
    if(num === 0 ){
      arrayPlayers1.splice(i,1)
      setArrayPlayers1([...arrayPlayers1])
      localStorage.setItem('playersMesa1', JSON.stringify([...arrayPlayers1]))
    }else{
      arrayPlayers2.splice(i,1)
      setArrayPlayers2([...arrayPlayers2])
      localStorage.setItem('playersMesa2', JSON.stringify([...arrayPlayers2]))
    }
  }

  useEffect(() => {
    if(localStorage.getItem('playersMesa1') !== null && localStorage.getItem('playersMesa2') !== null){
      setArrayPlayers1(JSON.parse([localStorage.getItem('playersMesa1')]))
      setArrayPlayers2(JSON.parse([localStorage.getItem('playersMesa2')]))
    }  
  },[])

  return (
    <C.Container>
      <C.Header>
        Lista Pings
      </C.Header>
      <C.Button mr='720' onClick={()=> navigate('/') }>
        Voltar
      </C.Button>
      <div className='Mesas-to-row'>
        <C.TableMesa>
        <C.TableMesaTitle>
          Mesa 1
        </C.TableMesaTitle>
        <C.Form>
          <input id='inputPlayer1' type="text" placeholder='Adicionar Jogador'/>
          <C.Button onClick={() => addPlayer(0)}>Adicionar na Lista</C.Button>
        </C.Form>
        <C.List>
          <C.ListPlayer>
            {arrayPlayers1.map((player,key) => 
              <C.Players>{player} - Esperando Mesa 1 <C.ButtonClose onClick={() => removePlayer(0,key)}>Entrou para Jogar</C.ButtonClose> </C.Players>
            )}
          </C.ListPlayer>
        
      </C.List>
    </C.TableMesa>
    <C.TableMesa>
        <C.TableMesaTitle>
          Mesa 2
        </C.TableMesaTitle>
        <C.Form>
          <input id='inputPlayer2' type="text" placeholder='Adicionar Jogador'/>
          <C.Button onClick={() => addPlayer(1)}>Adicionar na Lista</C.Button>
        </C.Form>
        <C.List>
          <C.ListPlayer>
            {arrayPlayers2.map((player,key) => 
              <C.Players>{player} - Esperando Mesa 2 <C.ButtonClose onClick={() => removePlayer(1,key)}>Entrou para Jogar</C.ButtonClose> </C.Players>
            )}
          </C.ListPlayer>
          
        </C.List>       
    </C.TableMesa>
      </div>
    </C.Container>
  )
}


export default Mesas;