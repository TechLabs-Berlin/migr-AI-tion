import React from "react";
import "./App.css";

import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/layout/Navigation";

import Home from "./pages/Home";
import Project from "./pages/Project";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <React.Fragment>
      <CssBaseline></CssBaseline>

      <Router>
        <Navigation></Navigation>
        <main>
          <Switch>
            <Route path="/project">
              <Project></Project>
            </Route>
            <Route path="/gallery">
              <Gallery></Gallery>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default App;
