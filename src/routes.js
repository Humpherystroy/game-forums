import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./App";
import CommentPage from "./containers/CommentPage";

const routes = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/games/:gameId" component={CommentPage} />
  </Router>
);

export default routes;
