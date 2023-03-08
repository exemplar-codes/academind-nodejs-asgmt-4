const express = require("express");

const app = express();

app.use((req, res, next) => {});

const PORT_NUMBER = process.env.PORT || 3000;
app.listen(PORT_NUMBER, () =>
  console.log(`Server running on port ${PORT_NUMBER}`)
);
