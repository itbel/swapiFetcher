const router = require("express").Router();
const axios = require("axios");

router.route("/search/:id").get((req, res) => {
  axios
    .get(`https://swapi.dev/api/planets/?search=${req.params.id}`, {})
    .then((response) => {
      if (response.data.results.length > 0) {
        obj = {
          name: response.data.results[0].name,
          diameter: response.data.results[0].diameter,
          climate: response.data.results[0].climate,
          population: response.data.results[0].population,
        };
        res.json(obj);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
