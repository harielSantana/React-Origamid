import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// import './Header.css';

const Header = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.log('Mudou a rota');
  }, [location]);

  const activeStyle = {
    color: '#4ac',
  };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} end>
        Home
      </NavLink>{' '}
      |{' '}
      <NavLink to="sobre" activeStyle={activeStyle}>
        Sobre
      </NavLink>
      |{' '}
      <NavLink to="login" activeStyle={activeStyle}>
        Login
      </NavLink>
    </nav>
  );
};

export default Header;
