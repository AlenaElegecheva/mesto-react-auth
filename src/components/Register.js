import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ onRegister }) {
  const [values, setValues] = useState({ email: '', password: '' });

  function handleChange(e) {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value })
  }
  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values);
  };
  return (
    <div className="entry-container">
      <h1 className="entry-container__heading">Регистрация</h1>
      <form className="entry-container__form entry-container__form_register" onSubmit={handleSubmit}>
        <input className="entry-container__input entry-container__input_register-email"
          type="email"
          name="email"
          id="email"
          value={values.email}
          placeholder="Email"
          onChange={handleChange}
          required />
        <input className="entry-container__input entry-container__input_register-password"
          type="password"
          name="password"
          id="password"
          value={values.password}
          placeholder="Пароль"
          onChange={handleChange}
          minLength="6" maxLength="40" required />
        <button className="entry-container__btn" type="submit">Зарегистрироваться</button>
        <div className="entry-container__signup">
          <p>Уже зарегистрированы? <Link to="/signin" className="entry-container__link">Войти</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Register