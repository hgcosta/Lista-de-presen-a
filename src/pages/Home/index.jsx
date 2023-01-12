import './style.css';
import {Card} from '../../components/Card';
import React, {useState, useEffect} from 'react';


function App() {

  const [studentName, setStudantName] = useState();
  const [students, setStudents] = useState([]);
  const [user,setUser] = useState({name:'', avatar:''});

  function handleAddStudent(){
    const newStudent = {
      name:studentName,
      time: new Date().toLocaleDateString('pt-br',{
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit',
      }),
      id: Math.random(),
    }
    console.log(newStudent);
    setStudents(prevState=>[...prevState, newStudent]);
    const inputNome = document.querySelector('#inputNome');
    inputNome.value = '';
  }

  useEffect(()=>{
    fetch("https://api.github.com/users/hgcosta")
    .then(response => response.json())
    .then(data => {
      setUser({name:data.name, avatar:data.avatar_url})
    })
  }, []);

  return (
   
    <>
      <div className="container">
        <header>
          <h1>Lista de presença</h1>
          <div className='header-perfil'>
            <img src={user.avatar} alt="" />
            <strong>{user.name}</strong>
          </div>
        </header>
        <input type="text" id="inputNome" onChange={e=> setStudantName(e.target.value)} placeholder="Digite o Nome" />
        <button type="button" onClick={handleAddStudent} >Adicionar</button>
      </div>
      {
        students.map(student => <Card name={student.name} time={student.time} />)
      }
    </>
  )
}

export default App
