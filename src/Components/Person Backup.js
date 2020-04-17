import React, { useState, useEffect } from "react";
import { Button, Table, InputGroup, Row, Form } from "react-bootstrap";
import Axios from "axios";

const Person = () => {
  const [person, setPerson] = useState(0);
  let i;
  const handleChange = (event) => {
    i = event.target.value;
  };
  useEffect(() => {
    drawTable();
    console.log(person);
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(`http://localhost:5000/api/person/search/${i}`, {})
      .then((response) => {
        console.log("logging response:");
        console.log(response.data);
        if (response.data !== {}) {
          setPerson({ person: response.data });
          console.log("response.data is not empty");
        } else {
          console.log(`${person} returned no results!`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const drawTable = () => {
    if (person !== 0) {
      return (
        <>
          <Table bordered hover className="text-center w-25 tableBackground">
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{person.person.name}</td>
                <td>{person.person.height}</td>
                <td>{person.person.weight}</td>
              </tr>
            </tbody>
          </Table>
        </>
      );
    } else {
      return null;
    }
  };
  return (
    <>
      <Row className="justify-content-center pt-5">
        <h1>Star Wars Character Search</h1>
      </Row>
      <Row className="justify-content-center pt-2">
        <Form.Label className="pt-1 pr-1">Search:</Form.Label>
        <InputGroup className="w-25">
          <Form.Control
            placeholder="Search by name..."
            value={i}
            onChange={(e) => handleChange(e)}
            type="text"
          />
          <Button onClick={(e) => handleSubmit(e)} size="sm" variant="dark">
            Search
          </Button>
        </InputGroup>
      </Row>
      <Row className="justify-content-center pt-5">{drawTable()}</Row>
    </>
  );
};

export default Person;
