const express = require("express");

const usersRouter = express.Router();

const userList = [{ name: "Sanjar" }];

usersRouter.get("/", (req, res, next) => {
  res.render("users");
});

usersRouter.use(express.urlencoded()); // for form data
usersRouter.post("/", (req, res, next) => {
  try {
    if (req.body.name) {
      userList.concat({ name: req.body.name, id: userList.length + 1 });
      res.status(200).redirect("/users");
    } else {
      res.status(418).send("Wrong input format");
    }
  } catch {
    res.send(500).send("Internal server error");
  }
});

usersRouter.post("/delete-all", (req, res, next) => {
  while (userList.length) userList.pop();
  res.redirect("/");
});

module.exports = usersRouter;
