import React, { useState, useEffect } from "react";
import { Button, Table, InputGroup, Row, Form } from "react-bootstrap";
import Axios from "axios";

const Planet = () => {
  const [planet, setPlanet] = useState(0);
  let i;
  const handleChange = (event) => {
    i = event.target.value;
  };
  useEffect(() => {
    drawTable();
  });
  const handleSubmit = () => {
    Axios.get(`http://localhost:5000/api/planet/search/${i}`)
      .then((response) => {
        console.log(response);
        setPlanet({ planet: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const drawTable = () => {
    if (planet !== 0) {
      return (
        <>
          <Table striped bordered hover className="text-center w-25">
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
      return null;
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
            value={i}
            onChange={handleChange}
            type="text"
          />
          <Button onClick={handleSubmit} size="sm" variant="dark">
            Search
          </Button>
        </InputGroup>
      </Row>
      <Row className="justify-content-center pt-5">{drawTable()}</Row>
    </>
  );
};

export default Planet;
