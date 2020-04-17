import React from "react";
import { Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Row className="justify-content-center pt-5">
        <h1>SWAPI Fetcher</h1>
      </Row>
      <Row className="justify-content-center">
        <p className="w-25 pt-2">
          This ReactJS site queries a backend Node server that connects to SWAPI
          and returns data to the client. The purpose of this project was to
          learn the basics of fetching from a RESTful API, data transformation.
        </p>
      </Row>
    </>
  );
};

export default Home;
