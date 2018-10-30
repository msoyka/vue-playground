const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

const endpoints = require("./routes/api/endpoints");
const pages = require("./routes/api/pages");

app.use("/api", endpoints);
app.use("/api/pages", pages);

const port = process.env.port || 3001;
app.listen(port, () => console.log(`Server running at port: ${port}`));
