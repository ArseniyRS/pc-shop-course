import Navbar from "./Navbar/Navbar";
import React, { useEffect, useState } from "react";
import "../styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AuthPage from "../pages/AuthPage";
import { AuthContext } from "../context/AuthContext";
import { CountSavedItems } from "../context/CountSavedItems";

function App(props) {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [countFav, setCountFav] = useState(0);
  const [countCart, setCountCart] = useState(0);
  useEffect(() => {
    setCountCart(JSON.parse(localStorage.getItem("cart"))?.length || 0);
    setCountFav(JSON.parse(localStorage.getItem("fav"))?.length || 0);
    setIsAuthorized(localStorage.getItem("isAuthorized"));
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthorized, setIsAuthorized }}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path={["/login", "/sign-up"]} exact>
            {isAuthorized ? (
              <Redirect to={"/profile"} />
            ) : (
              <AuthPage setIsAuthorized={setIsAuthorized} />
            )}
          </Route>
          <Route path="/">
            <CountSavedItems.Provider
              value={{ countCart, countFav, setCountFav, setCountCart }}
            >
              <MainPage />
            </CountSavedItems.Provider>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default withRouter(App);
