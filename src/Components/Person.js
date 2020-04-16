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
  });
  const handleSubmit = () => {
    Axios.get(`http://localhost:5000/api/search/${i}`)
      .then((response) => {
        setPerson({ person: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const drawTable = () => {
    if (person !== 0) {
      return (
        <>
          <Table striped bordered hover className="text-center w-25">
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
                <td>{person.person.mass}</td>
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
      <Row className="justify-content-center">
        <h1>Star Wars Characters</h1>
      </Row>
      <Row className="justify-content-center">
        <Form.Label className="pt-1 pr-1">Search:</Form.Label>
        <InputGroup className="w-25">
          <Form.Control
            placeholder="Search"
            value={i}
            onChange={handleChange}
            type="text"
          />
          <Button onClick={handleSubmit} size="sm" variant="dark">
            Search
          </Button>
        </InputGroup>
      </Row>
      <Row className="justify-content-center">{drawTable()}</Row>
    </>
  );
};

export default Person;
