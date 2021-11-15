import React from "react";
import { Route, Switch } from "react-router";
import SignIn from "../components/Auth/SignIn";
import '../styles/auth.scss'

const AuthPage = ({setIsAuthorized}) => {
  return (
      <Switch>
        <Route path={"/login"}>
          <SignIn setIsAuthorized={setIsAuthorized}/>
        </Route>
      </Switch>
  );
};

export default AuthPage;
