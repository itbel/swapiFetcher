import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Form } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import axios from 'axios';

import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      persons:[],
      value: '',
      name:'',
      height:'',
      weight:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.pullPersonSearch(this.state.value);
    event.preventDefault();
  }

  componentDidMount() {
  }
  
  pullPerson = (num) =>{
    axios.get(`http://localhost:5000/getperson/${num}`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(this.state.persons)
      })
    setTimeout(() => {}, 5000) // rate limiting
  }

  pullPersonSearch = (str) =>{
    axios.get(`http://localhost:5000/search/${str}`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        if (this.state.persons.results[0] !== undefined)
        {
          this.setState({name: this.state.persons.results[0]['name']});
          this.setState({weight: this.state.persons.results[0]['mass']});
          this.setState({height: this.state.persons.results[0]['height']});
        }
      })
    setTimeout(() => {}, 5000) // rate limiting
  }

  render(){
    return (
      <div className="App">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formSearch"> 
            <Form.Control type="text" value={this.state.value} onChange={this.handleChange}placeholder="Search" />
          </Form.Group>
        </Form>
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
        
      </div>
    );
  }
}