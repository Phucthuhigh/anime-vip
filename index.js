const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const app = express();
app.use(cors({ origin: true }));

const MINUTES = 1;

const limiter = rateLimit({
    windowMs: MINUTES * 60 * 1000,
    max: 1000,
});

app.use(limiter);

app.use("/api", routes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log("Server is listening on port " + PORT));
