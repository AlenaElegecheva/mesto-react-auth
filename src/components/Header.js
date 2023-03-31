import React, { Link, Route, Routes } from "react-router-dom";
import logo from '../images/logo.svg';

function Header({ onSignOut, email }) {

  return (
    <header className="header">
      <div className="header__menu">
        <img className="header__logo" src={logo} alt="логотип" />
        <div className="header__user-info">
          <p className="header__email">{email}</p>
          <Routes>
            <Route path="/" element={<Link onClick={onSignOut} to="/signin" className="header__link">Выйти</Link>} />
            <Route path="/mesto-react" element={<Link onClick={onSignOut} to="/signin" className="header__link">Выйти</Link>} />
            <Route path="/signin" element={<Link to="/signup" className="header__link">Регистрация</Link>} />
            <Route path="/signup" element={<Link to="/signin" className="header__link">Войти</Link>} />
          </Routes>
        </div>
      </div>
    </header>
  )
}
export default Header;