import React from "react";
import { Route, Switch } from "react-router-dom";
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import MainPageContainer from "./main_page/main_page_container";
import PostDetailContainer from "./post_detail/post_detail_container";
import InstagramNavi from "./instagram_navi/instagram_navi_container";
import ProfilePageContainer from "./profile_page/profile_page_container";
import { AuthRoute } from "../utils/route.util";
import { ProtectedRoute } from "../utils/route.util";
import { withRouter } from "react-router";

const App = withRouter(({ location }) => (
  <section className="holder">
    {location.pathname !== "/login" && location.pathname !== "/signup" && (
      <InstagramNavi />
    )}
    <Switch>
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute exact path="/" component={MainPageContainer} />
      <ProtectedRoute path="/posts/:postId" component={PostDetailContainer} />
      <ProtectedRoute
        exact
        path="/users/:username"
        component={ProfilePageContainer}
      />
    </Switch>
  </section>
));

export default App;
