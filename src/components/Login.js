import React, { useState } from "react";

function Login({ onLogin }) {
  const inputValues = { email: '', password: ''};
  const [values, setValues] = useState(inputValues);

  function handleChange(e) {
    const {value, name} = e.target;
    setValues({...values, [name]: value })
  }
  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  };

  return (
    <div className="entry-container">
    <h1 className="entry-container__heading">Вход</h1>
    <form className="entry-container__form entry-container__form_login" onSubmit={handleSubmit}>
      <input className="entry-container__input entry-container__input_login-email" 
      type="email"
      name="email" 
      id="email" 
      value={values.email}
      placeholder="Email"
      onChange={handleChange} 
      required />
      <input className="entry-container__input entry-container__input_login-password" 
      type="password" 
      name="password" 
      id="password" 
      value={values.password}
      placeholder="Пароль"
      onChange={handleChange}
      minLength="6" maxLength="40" required />
      <button className="entry-container__btn" type="submit">Войти</button>
    </form>
  </div>
  )
}

export default Login