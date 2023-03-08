const express = require("express");

const usersRouter = express.Router();

const usersList = [{ name: "Sanjar" }];
console.log("Ran route");

usersRouter.get("/", (req, res, next) => {
  res.render("users", { usersList });
});

usersRouter.use(express.urlencoded()); // for form data
usersRouter.post("/", (req, res, next) => {
  try {
    if (req.body.name) {
      usersList.push({ name: req.body.name, id: usersList.length + 1 });
      res.status(200).redirect("/");
    } else {
      res.status(418).send("Wrong input format");
    }
  } catch {
    res.send(500).send("Internal server error");
  }
});

usersRouter.post("/delete-all-users", (req, res, next) => {
  while (usersList.length) usersList.pop();
  res.redirect("/");
});

module.exports = usersRouter;
