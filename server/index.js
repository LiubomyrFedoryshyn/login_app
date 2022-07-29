const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const loginRoutes = require("./routes/loginRoutes");

const app = express();

const DBURI = "mongodb+srv://robber:lf846375999186@loginapp.sjtbh.mongodb.net/userlist?retryWrites=true&w=majority";

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());

express.json();

mongoose
    .connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
        app.listen(3001);
        console.log("backend setupped");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.urlencoded({ extended: true })); // for accepting form data
app.use(morgan("dev"));
app.use("/login", loginRoutes);
