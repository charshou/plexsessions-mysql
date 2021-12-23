const express = require("express");
const router = express.Router();
const Confession = require("../models/confession")
const User = require("../models/user")


module.exports = () => {
    router.post("/create_admin", async (req, res) => {
        const admin = await User.create({
            admin: true,
            username: "admin",
            password: "admin"
        });
    })

    router.get("/", (req, res) => {
        /**
         * Gets accepted confessions
         * 
         * Body: {}
         * 
         * Return {
         *  {
         *      id: int
         *      content: string
         *      status: bool
         *  }
         * }
         */
        res.send(res.locals.confessions.filter((entry) => {
            return entry.status;
        }));
    })

    router.get("/admin", (req, res) => {
        /**
         * Gets unaccepted confessions
         * 
         * Body: {}
         * 
         * Return {
         *  {
         *      id: int
         *      content: string
         *      status: bool
         *  }
         * }
         */
        res.send(res.locals.confessions.filter((entry) => {
            return !entry.status
        }));
    })

    return router;
};