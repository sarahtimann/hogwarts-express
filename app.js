import "dotenv/config";

import express from "express";

// Database
import { Pool } from "pg";


const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(3000, () => {
  console.log("Server kører på port 3000");
});
