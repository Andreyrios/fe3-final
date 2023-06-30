import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';

import { ContextGlobal } from './utils/global.context';
import { ACTIONS } from './utils/actions';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useContext(ContextGlobal);
  const location = useLocation();

  const handleThemeChange = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME });
  };

  return (
    <nav className={'nav'} style={{background: state.theme === 'light' ? 'red' : 'blue'}}>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        <li className={location.pathname === "/favs" ? "active" : ""}>
          <Link to="/favs">Favs</Link>
        </li>
        <li className={location.pathname === "/favs" ? "active" : ""}>
          <Link to="/destist/10">Dentista</Link>
        </li>
      </ul>
      <button onClick={handleThemeChange}>Change theme</button>
    </nav>
  )
}

export default Navbar