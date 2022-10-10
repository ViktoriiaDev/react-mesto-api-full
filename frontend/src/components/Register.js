import React from "react";
import { Link } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";
import { singup } from "../utils/auth";

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [tooltipState, setTooltipState] = React.useState({
    isOpen: false,
    isSuccess: false
  })


  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const closePopup = () => {
    setTooltipState(prev => ({
      ...prev,
      isOpen: false,
    }))
  };

  function handleSubmit(e) {
    e.preventDefault();
    singup(email, password).then((res) => {
      if (res.data) {
        setTooltipState({
          isOpen: true,
          isSuccess: true
        })
      }
    })
    .catch((e) => {
      setTooltipState({
        isOpen: true,
        isSuccess: false
      })
    });
  }
  
  return (
    <>
      <div className="unauth">
        <div className="unauth__title">Регистрация</div>
        <form onSubmit={handleSubmit} className="unauth__form">
          <input
            value={email}
            onChange={handleChangeEmail}
            placeholder="Email"
            name="email"
            className="unauth__form-input"
            required
          />

          <input
            value={password}
            onChange={handleChangePassword}
            placeholder="Пароль"
            name="password"
            className="unauth__form-input"
            type="password"
            required
          />
          <button className="unauth__form-submit" type="submit">
            Зарегистрироваться
          </button>
           <Link to="/sign-in" className="unauth__link">Уже зарегистрированы? Войти</Link>
        </form>
      </div>
    <InfoTooltip isOpen={tooltipState.isOpen} isSuccess={tooltipState.isSuccess} onClose={closePopup}/>
    </>
  );
};

export default Register;
