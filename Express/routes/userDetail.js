const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

router.get("/userList/:id", async(req, res, next) => {
    try{
        const response = await fetch(`http://localhost:5001/api/user/${req.params.id}`);
        const data = await response.json();
        res.render("userDetail", {
            userList: data,
            title: data[0].name
          });

    } catch(e){
        res.send(e.message);
    }
});

module.exports = router;