const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes/index")

require("./database/connection")

const Confession = require("./models/confession")

const app = express();
const port = 1234;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"))

app.use(async (req, res, next) => {
    try {
        const confessions = await Confession.findAll();
        res.locals.confessions = confessions;
        return next()
    } catch (err) {
        console.log(err)
        res.locals.confessions = [];
        return next()
    }
})

app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({extended: true}));

app.use("/", routes());

app.listen(port, () => console.log("Listening on port 1234"))