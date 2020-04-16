const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const personsRouter = require("./routes/persons");

app.use("/api", personsRouter);

app.listen(5000, () => {
  console.log("Listening on port 5000...");
});
