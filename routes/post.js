const { request } = require("express");
const express = require("express");
const Confession = require("../models/confession")

const {check, validationResult} = require("express-validator")

const router = express.Router();

module.exports = () => {
    router.get("/", (req, res, next) => {
        try {
            res.render("layout", { template: "post" })
        } catch (err) {
            return next(err)
        }
    });

    router.post("/", [    
        check("message")
        .trim()
        .isLength({min : 1})
        .escape()
        .withMessage("There is no message.")
    ], async (req, res) => {

        const error = validationResult(req);

        if (!error.isEmpty()) {
            req.session.feedback = {
                errors: errors.array()
            }
            return res.redirect("/post");
        }
        
        const confession = await Confession.create({
            status: false,
            content: req.body.message
        });

        return res.render("layout", { template: "post" });
    })

    return router;
}