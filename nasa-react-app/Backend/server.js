const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection success!");
})

app.get('/', (req, res) => {
    res.send("AF Assignment");
})

const NasaUser = require("./routes/nasa_user");
//http://localhost:8070/nasaUser
app.use("/NasaUser", NasaUser);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});