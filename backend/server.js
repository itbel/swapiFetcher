const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const personsRouter = require("./routes/persons");
const planetsRouter = require("./routes/planets");

app.use("/api/person", personsRouter);
app.use("/api/planet", planetsRouter);

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
