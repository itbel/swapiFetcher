const router = require("express").Router();
const axios = require("axios");

router.route("/search/:id").get((req, res) => {
  axios
    .get(`https://swapi.dev/api/people/?search=${req.params.id}`, {
      timeout: 2000,
    })
    .then((response) => {
      let obj = {};
      if (response.data.results.length > 0) {
        obj = {
          name: response.data.results[0].name,
          height: response.data.results[0].height,
          weight: response.data.results[0].mass,
        };
      }
      res.json(obj);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
