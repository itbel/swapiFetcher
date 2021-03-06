import React, { useState } from "react";
import { Button, Table, InputGroup, Row, Form } from "react-bootstrap";
import Axios from "axios";

const Person = () => {
  const [person, setPerson] = useState("");
  const [fieldValue, setFieldValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fieldValue !== "" && fieldValue !== undefined) {
      Axios.get(`http://localhost:5000/api/person/search/${fieldValue}`, {})
        .then((response) => {
          if (response.data !== {}) {
            setPerson({ person: response.data });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Field cannot be empty!");
    }
  };

  const drawTable = () => {
    if (person !== "" && "name" in person.person) {
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
      if (person === "") return null;
      return "NO RESULTS";
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
            value={fieldValue}
            onChange={(e) => setFieldValue(e.target.value)}
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
