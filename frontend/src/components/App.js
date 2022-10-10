import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import { getUser } from "../utils/auth";

import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { api } from "../utils/api.js";

function App() {
  const { push } = useHistory();
  const [currentUser, setСurrentUser] = React.useState({
    name: "",
    about: "",
  });
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((result) => {
        setСurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const fetchUser = () => {
    getUser()
      .then((res) => {
        if (res) {
          setLoggedIn(true);
          setEmail(res.data.email);
          push("/");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        localStorage.removeItem("jwt");
        push("/sign-in");
      });
  };

  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header email={email}/>

      <Switch>
        <Route path="/sign-in">
          <Login setLoggedIn={setLoggedIn} fetchUser={fetchUser} />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <ProtectedRoute
          path="/"
          loggedIn={loggedIn}
          component={MainPage}
          setСurrentUser={setСurrentUser}
        />
      </Switch>

      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
