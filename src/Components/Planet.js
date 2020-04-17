import React, { useState } from "react";
import { Button, Table, InputGroup, Row, Form } from "react-bootstrap";
import Axios from "axios";

const Planet = () => {
  const [planet, setPlanet] = useState("");
  const [fieldValue, setFieldValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fieldValue !== "" && fieldValue !== undefined) {
      Axios.get(`http://localhost:5000/api/planet/search/${fieldValue}`)
        .then((response) => {
          if (response.data !== {}) {
            setPlanet({ planet: response.data });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("Fields cannot be empty!");
    }
  };
  const drawTable = () => {
    if (planet !== "" && "name" in planet.planet) {
      return (
        <>
          <Table
            striped
            bordered
            hover
            className="tableBackground text-center w-25"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Diameter</th>
                <th>Climate</th>
                <th>Population</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{planet.planet.name}</td>
                <td>{planet.planet.diameter}</td>
                <td>{planet.planet.climate}</td>
                <td>{planet.planet.population}</td>
              </tr>
            </tbody>
          </Table>
        </>
      );
    } else {
      if (planet === "") return null;
      return "NO RESULTS";
    }
  };
  return (
    <>
      <Row className="justify-content-center pt-5">
        <h1>Star Wars Planet Search</h1>
      </Row>
      <Row className="justify-content-center pt-2">
        <Form.Label className="pt-1 pr-1">Search:</Form.Label>
        <InputGroup className="w-25">
          <Form.Control
            placeholder="Search by planet name..."
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

export default Planet;
