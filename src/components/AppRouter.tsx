import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import { privateRoutes, publicRoutes, RouteNames } from "../router/intex";

const AppRouter: FC = () => {
  const auth = false;
  return auth ? (
    <Switch>
      {privateRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        );
      })}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
            key={route.path}
          />
        );
      })}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
