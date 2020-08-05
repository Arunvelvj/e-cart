import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouteEnum from "../Constants/RouteEnum";
import Home from "./Home";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import PageNotFound from "../Components/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={RouteEnum.Home} component={Home} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
