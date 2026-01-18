const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
  res.json({status:"CellarCount 2026 backend klar"});
});

app.listen(3000, ()=>{
  console.log("Backend klar på port 3000");
});