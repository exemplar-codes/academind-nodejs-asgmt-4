const express = require("express");

const app = express();

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use(express.static("public"));
app.set("view engine", "ejs");
// app.set('views') // not needed

app.use("/users", usersRouter);
app.use("/", indexRouter);

app.use((req, res, next) => {
  res.render("404-page");
});

const PORT_NUMBER = process.env.PORT || 3000;
app.listen(PORT_NUMBER, () =>
  console.log(`Server running on port ${PORT_NUMBER}`)
);
