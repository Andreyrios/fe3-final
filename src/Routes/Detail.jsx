import React, { useEffect, useState } from 'react'
// Libraries
import { useParams } from 'react-router';
// Api
import { getDestinstDetail } from '../Components/services/getDestinstDetail';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dataDentist, setDataDentist] = useState({})

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { id } = useParams();
  console.log('id', id)

  useEffect(() => {
    apiGetdetailDentist()
  }, [])

  const apiGetdetailDentist = async () => {
    try {
      const dentistDetail = await getDestinstDetail(id);
      console.log('dentistDetail', JSON.stringify(dentistDetail))
      setDataDentist(dentistDetail)
    } catch (error) {
      console.error('Failed to fetch and set dentist detail', error);
    }
  }

  return (
    <>
      <h1>Detail Dentist id</h1>
      {JSON.stringify(dataDentist) !== '{}' &&
        <div className='info-user'>
          <tr>
            <th>Name</th> <th>Email</th> <th>Phone</th> <th>website</th>
          </tr>
          <tr>
            <td>{dataDentist.name}</td> <td>{dataDentist.email}</td> <td>{dataDentist.phone}</td> <td>{dataDentist.website}</td>
          </tr>
        </div>
      }
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail