require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const userRoutes = require("./routes/user.routes");
app.use("/api/users", userRoutes);


app.get("/", (req, res) => res.send("API Portfolio funcionando!"));

module.exports = app;
