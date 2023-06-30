import React, { useContext } from 'react'
// Components
import Card from '../Components/Card'
// Utils
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { state } = useContext(ContextGlobal);
  const listDentists = state.dentists || []

  return (
    <main className="" >
      <h1>Home</h1>
      {listDentists.length !== 0 &&
        <div className='card-grid'>
          {listDentists.map(dentist => {
            return (
              /* Aqui deberias renderizar las cards */
              <Card key={dentist.id} name={dentist.name} username={dentist.username} id={dentist.id} />
            )
          })}
        </div>
      }
    </main>
  )
}

export default Home