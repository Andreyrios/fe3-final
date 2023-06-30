import React, { useContext, useState } from "react";
// Libraries
import { Link } from "react-router-dom";
// Utils
import { ACTIONS } from "./utils/actions";
import { ContextGlobal } from "./utils/global.context";

const Card = ({ name, username, id, foundFavs }) => {
  const { dispatch } = useContext(ContextGlobal);

  const addFav = (event) => {
    // Aqui iria la logica para agregar la Card en el localStorage
    event.preventDefault()
    if (!foundFavs) {
      const dentistFav = {
        name, username, id
      }
      dispatch({ type: ACTIONS.ADD_DENTIST, payload: { dentistFav } });
    }
  }

  return (
    <Link className="card" to={`/destist/${id}`}>
      <h2>{name}</h2>
      <p>User name: {username}</p>
      <p>ID: {id}</p>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button
        style={{ background: foundFavs ? 'blue' : 'red' }}
        onClick={(e) => addFav(e)}
        className="favButton"
      >
        {foundFavs ? '⭐' : 'Add fav'}
      </button>
    </Link>
  );
};

export default Card;
