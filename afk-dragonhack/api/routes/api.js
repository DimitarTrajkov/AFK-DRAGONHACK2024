var router = require("express").Router();
const { requiresAuth } = require("express-openid-connect");
const fs = require("fs");
const path = require("path");

router.get("/", function (req, res, next) {
  console.log("/ strana");
  // res.sendFile(path.join(__dirname, "homepage.html"));
  res.send("hello!");
});

router.get("/profile", requiresAuth(), function (req, res, next) {
  console.log("/profile strana");
});

module.exports = router;
