const express = require("express");
// const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const loginRoutes = require("./routes/loginRoutes");
const userRoutes = require("./routes/userRoutes");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const DBURI = "mongodb+srv://robber:lf846375999186@loginapp.sjtbh.mongodb.net/userlist?retryWrites=true&w=majority";

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const PORT = 3001;
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    // reconnectTries: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

express.json();

mongoose
    .connect(DBURI, option)
    .then((res) => {
        app.listen(PORT);
        console.log(" RESTful API server started on: " + PORT);
    })
    .catch((err) => {
        console.log(err);
    });

// jwt token verification
app.use(function (req, res, next) {
    if (!req.originalUrl.includes("login")) {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({ message: "User is not authenticated" });
        }
        try {
            const data = jwt.verify(token, "token");
            req.userId = data.id;
            req.userRole = data.role;
            return next();
        } catch {
            res.clearCookie("token");
            return res.status(403).json({ message: "Some error is occured, please, try again later!" });
        }
    } else {
        return next();
    }
});

// app.use(express.urlencoded({ extended: true })); // for accepting form data
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/login", loginRoutes);
app.use("/user", userRoutes);
