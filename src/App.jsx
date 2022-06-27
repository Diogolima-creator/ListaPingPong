import * as C from './App.styles'
import { useNavigate } from 'react-router';

function App() {
 
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Header>
        <C.TextBold>Lista do Pings</C.TextBold>
      </C.Header>
      <C.Menu>
        <C.Button onClick={() => navigate('/ListaUnica')}>
          Lista Unica
        </C.Button  >
        <C.Button onClick={() => navigate('/Mesas')}>
          Mesas
        </C.Button>
      </C.Menu>
    </C.Container>
  )
}

export default App
