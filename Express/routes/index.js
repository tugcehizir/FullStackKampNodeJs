const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/", async (req, res, next) => {
  try {
    const response = await fetch("http://localhost:5001/api/userList");
    const data = await response.json();
    console.log(data)
    res.render("index", {
      userList: data,
      title: "Kullanıcı Bilgileri"
    });
    
  } catch (error) {
    res.send("birşeyler ters gitti.");
  }
});

module.exports = router;
