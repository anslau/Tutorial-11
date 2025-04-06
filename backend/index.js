const express = require("express");
const routes = require("./routes");
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const cors = require("cors");

const app = express();
app.use(cors({
    origin: FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use(express.json());
app.use('', routes);


module.exports = app;