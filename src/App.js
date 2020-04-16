import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Person from "./Components/Person";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Home from "./Components/Home";
import { Container } from "react-bootstrap";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      value: "",
      name: "",
      height: "",
      weight: "",
      personObj: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleToUpdate = (returnedObj) => {
    this.setState({ personObj: returnedObj });
  };
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.pullPersonSearch(this.state.value);
    event.preventDefault();
  }

  pullPersonSearch = (str) => {
    axios.get(`http://localhost:5000/api/search/${str}`).then((res) => {
      const persons = res.data;
      this.setState({ persons });
      if (this.state.persons.results[0] !== undefined) {
        this.setState({ name: this.state.persons.results[0]["name"] });
        this.setState({ weight: this.state.persons.results[0]["mass"] });
        this.setState({ height: this.state.persons.results[0]["height"] });
      }
    });
  };

  render() {
    return (
      <Container fluid className="fill">
        <Router>
          <Nav />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/person" component={Person} />
          </Switch>
        </Router>
      </Container>
    );
  }
}
/*
        <Row className="justify-content-center">
          <h1>Star Wars API</h1>
        </Row>
        <Row className="justify-content-center">
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Search"
              />
            </Form.Group>
          </Form>
        </Row>
        <Row className="justify-content-center">
          <Table striped bordered hover className="text-center">
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.name}</td>
                <td>{this.state.height}</td>
                <td>{this.state.weight}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        */
