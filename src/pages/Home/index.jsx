import './style.css';
import {Card} from '../../components/Card';
import React, {useState} from 'react';


function App() {

  const [studentName, setStudantName] = useState();
  const [students, setStudents] = useState([]);
 
  function handleAddStudent(){
    const newStudent = {
      name:studentName,
      time: new Date().toLocaleDateString('pt-br',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
      })
    }
    console.log(newStudent);
    setStudents([newStudent]);
  }


  return (
   
    <>
      <div className="container">
        <h1>Lista de presença</h1>
        <input type="text" onChange={e=> setStudantName(e.target.value)} placeholder="Digite o Nome" />
        <button type="button" onClick={handleAddStudent} >Adicionar</button>
      </div>
      {
        students.map(student => <Card name={student.name} time={student.time} />)
      }
    </>
  )
}

export default App
