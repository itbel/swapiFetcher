const router = require("express").Router();
const axios = require("axios");

router.route("/getperson/:id").get((req, res) => {
  axios.get(`https://swapi.dev/api/people/${req.params.id}`, {}).then(
    (response) => {
      console.log(response.data);
      res.json(response.data);
    },
    (error) => {
      console.log(error);
    }
  );
});

router.route("/search/:id").get((req, res) => {
  axios.get(`https://swapi.dev/api/people/?search=${req.params.id}`, {}).then(
    (response) => {
      res.json(response.data);
    },
    (error) => {
      console.log(error);
    }
  );
});

module.exports = router;
