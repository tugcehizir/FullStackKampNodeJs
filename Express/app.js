const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const indexRouter = require("./routes/index");
const userDetailRouter = require('./routes/userDetail');

app.use("/", indexRouter);
app.use("/", userDetailRouter);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

const server = http.createServer(app);
server.listen(5000, "127.0.0.1", () => {
  console.log("listening the port 127.0.0.1:3000");
});