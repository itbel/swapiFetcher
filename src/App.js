import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Person from "./Components/Person";
import Nav from "./Components/Nav";
import Planet from "./Components/Planet";
import Home from "./Components/Home";
import { Container } from "react-bootstrap";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <Container fluid className="fill">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/planet" component={Planet} />
            <Route path="/person" component={Person} />
          </Switch>
        </Router>
      </Container>
    );
  }
}
