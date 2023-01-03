import './style.css'

import Card from '../../Card/components'
import { useState } from 'react';

function home() {

  const [studentName, setStudentName] = useState()
  return (
    <div className="container">
     <h1>Nome: {studentName}</h1>
     <input type="text" 
     placeholder="insira um nome"
     onChange={e => setStudentName(e.target.value)}
     />

     
     <button>Teste</button>
     <Card name="Reinaldo" time="17:35"/>
     <Card name="Dario" time="17:36"/>
     <Card name="Lucas" time="17:39" />
    </div>
   
  )
}

export default home
