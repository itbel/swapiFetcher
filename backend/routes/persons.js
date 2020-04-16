const router = require("express").Router();
const axios = require("axios");

router.route("/search/:id").get((req, res) => {
  axios
    .get(`https://swapi.dev/api/people/?search=${req.params.id}`, {})
    .then((response) => {
      if (response.data.results.length > 0) res.json(response.data.results[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
