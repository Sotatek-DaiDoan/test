import React from "react";
import ROUTES from "Routers/Constants/Routes";
import { withRouter } from "react-router";
import { RouteComponentProps, Switch } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Page500 from "Pages/Error500Page";
import Page404 from "Pages/Error404Page";
import Home from "Pages/Home";
import MyProfile from "Components/Modules/MyProfile";


const BaseRoute: React.FC<RouteComponentProps> = (props) => {
  return (
    <Switch>
      <PublicRoute path={ROUTES.HOME} exact Component={Home} />
      <PublicRoute path={ROUTES.MY_PROFILE} exact Component={MyProfile} />
      <PublicRoute path={ROUTES.PAGE_500} exact Component={Page500} />
      <PrivateRoute path={ROUTES.PAGE_404} exact Component={Page404} />
    </Switch>
  );
};

export default withRouter(BaseRoute);
