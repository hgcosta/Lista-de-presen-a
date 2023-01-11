import './style.css';
import {Card} from '../../components/Card';
function App() {


  return (
    <>
      <div className="container">
        <h1>Lista de presença</h1>
        <input type="text" placeholder="Digite o nome" />
        <button type="submit">Adicionar</button>
      </div>
      <Card/>
      <Card/>

    </>
  )
}

export default App
