const express = require("express");
const router = express.Router();
const Confession = require("../models/confession")

var adminAccess = false;

const users = [
    {name: "admin", pass: "admin"}
]

function checkLogin (name, pass) {
    for (var i = 0; i < users.length; i++) {
        user = users[i];
        if (user.uname == name && user.pass == pass) {
            return true;
        }
    }
    return false;
}

module.exports = () => {
    router.get("/", (req, res) => {
        try {
            if (adminAccess) {
                res.render("layout", {template: "admin-page"})
            } else {
                res.render("layout", { template: "admin-login" })
            }
        } catch (err) {
            return next(err)
        }
    })

    router.post("/", (req, res) => {
        adminAccess = checkLogin(req.body.name, req.body.pass);
        return res.redirect("/admin");
    })
    
    router.post("/login", async (req, res) => {
        const entry = req.body;
        if (entry.buttonval == "Accept") {
            const confession = await Confession.findOne({where: {id: entry.uid}});
            confession.status = true;
            confession.save();
        } else if (entry.buttonval == "Reject") {
            const confession = await Confession.destroy({where: {id: entry.uid}});
        }
        return res.redirect("back");
    });

    return router;
};