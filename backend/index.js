const express = require("express");
const bodyParser = require("body-parser");
const testmiddleware = require("./middleware/testmiddleware");
const cors = require("cors");
var cookieParser = require("cookie-parser");
const app = express();
const dotenv = require("dotenv");

// middleware calls
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
// importing routers
const router = require("./routes/Routes");
require("dotenv").config();

const port = process.env.PORT || 3000;
const { connect } = require("./DBconnection");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(testmiddleware);
app.use(logger);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// api routes
app.use("/api", router);

app.use(errorHandler);

app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
