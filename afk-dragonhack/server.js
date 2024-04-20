const dotenv = require("dotenv").config();
const express = require("express");
const http = require("http");
const logger = require("morgan");
const path = require("path");
const router = require("./api/routes/index");
const { auth } = require("express-openid-connect");

const app = express();

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "src")));
app.use(express.json());

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

const port = 3000;

app.use(auth(config));
app.set("view engine", "esj");

app.use(function (req, res, next) {
  res.locals.user = req.oidc.user;
  next();
});

app.use("/", router);

app.use(function (req, res, next) {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log("Napaka");
});

http.createServer(app).listen(port, () => {
  console.log(`Listening on ${config.baseURL}`);
});
