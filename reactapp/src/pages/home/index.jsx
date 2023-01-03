import './style.css'

import Card from '../../Card/components'
import { useState } from 'react';

function home() {

  const [studentName, setStudentName] = useState()  //ao usar o state passamos a variável e a função que atualzia o estado
  const [students, setStudents] = useState([]);

  function AddStudent() {
    const newStudent ={
      name: studentName,
      time: new Date().toLocaleDateString("pt-br",
       {
        hour: '2-digit',
        minute: '2-digit',
        second:'2-digit'
      })
    };

    setStudents(prevState => [...prevState, newStudent])
    //criei uma arrow function que irá pegar o estado anterior,guardar e adicionar um novo
    //pois em react o estado não se altera, nesse caso criamos um novo encima do outro
    //os "..." são um spread, para queele adicione vetores como itens separados e nao
    //vetores dentro de outros vetores
  }

  return (
    <div className="container">
     <h1>Nome: {studentName}</h1>
     <input type="text" 
     placeholder="insira um nome"
     onChange={e => setStudentName(e.target.value)}
     />

     
     <button onClick={AddStudent}>Teste</button>
     {
      students.map(student => <Card key={student.time} name={student.name} time={student.time}/>)
      
      }
     
    </div>
   
  )
}

export default home
