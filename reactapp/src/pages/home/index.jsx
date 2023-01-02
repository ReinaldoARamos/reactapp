import './style.css'

import Card from '../../Card/components'

function home() {


  return (
    <div className="container">
     <h1>Lista de presença</h1>
     <input type="text" placeholder="insira um nome"/>

     
     <button>Teste</button>
     <Card />
     <Card />
     <Card />
    </div>
   
  )
}

export default home
