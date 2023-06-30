import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ContextProvider } from "./utils/global.context";


const Card = ({ name, username, id }) => {

  const { dispatch } = useContext(ContextProvider);

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">

      <h2>{name}</h2>
      <p>ID: {id}</p>
      <Link to={`/dentists/10`}>Ver detalles</Link>
      <button>Borrar Dentista</button>
        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
