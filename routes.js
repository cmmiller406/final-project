"use strict";
const express = require("express");
const food = express.Router();
const pool = require("./pg-connection-pool.js");

food.get("/food", (req, res) => {
    pool.query("SELECT * FROM fooditems ORDER BY id").then((result) => {
        res.json(result.rows)
    });});

module.exports = food;