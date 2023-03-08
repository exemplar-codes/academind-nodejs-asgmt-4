const express = require("express");

const usersRouter = express.Router();

const userList = [{ name: "Sanjar" }];

usersRouter.get("/", (req, res, next) => {
  res.render("users");
});

usersRouter.use(express.urlencoded()); // for form data
usersRouter.post("/", (req, res, next) => {
  if (req.body.name) {
    userList.append({ name: req.body.name, id: userList.length + 1 });
    res.status(200).redirect("/users");
  }
});

usersRouter.post("/delete-all", (req, res, next) => {
  while (userList.length) userList.pop();
  res.redirect("/");
});

module.exports = usersRouter;
