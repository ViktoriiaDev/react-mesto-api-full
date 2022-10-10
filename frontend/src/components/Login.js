import React from "react";
import { useHistory } from "react-router-dom";
import { singin } from "../utils/auth";

const Login = ({ setLoggedIn, fetchUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { push } = useHistory();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    singin(email, password)
      .then((res) => {
        if (res) {
          fetchUser();
          setLoggedIn(true);
          push("/");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div className="unauth">
      <div className="unauth__title">Вход</div>
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
          required
        />
        <button className="unauth__form-submit" type="submit">
          Войти
        </button>
      </form>
    </div>
  );
};

export default Login;
