import React, { useState, useCallback } from "react";
import Axios from "axios";
import { Table, Form, Button } from "react-bootstrap";

let person = {};

const Person = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = () => {
    Axios.get(`http://localhost:5000/api/search/${searchTerm}`)
      .then((res) => {
        console.log("results are being fetched!");
        console.log(res.data.results[0]);
        let personObj = {
          name: res.data.results[0].name,
          height: res.data.results[0].height,
          weight: res.data.results[0].mass,
        };
        person = personObj;
        setSearchResult(person);
      })
      .catch((err) => {
        console.log("results are being fetched! ERROR");
        console.log(err);
      });
  };
  console.log(searchResult);
  console.log("person is not undefined");
  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <Button onClick={handleSubmit}>search</Button>
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
            <td>{searchResult.name}</td>
            <td>{searchResult.weight}</td>
            <td>{searchResult.weight}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Person;
