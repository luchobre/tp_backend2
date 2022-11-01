const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");


const app = express();

dotenv.config();

app.use(express.json());

app.use('/', routes);

app.listen(process.env.PORT, () => {
  console.log(`${process.env.MESSAGE} ${process.env.PORT}`);
});