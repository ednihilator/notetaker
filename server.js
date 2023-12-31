const express = require("express");
const htmlRoutes = require("./routes/html_routes");
const apiRoutes = require("./routes/api_routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api", apiRoutes);

app.use("/", htmlRoutes);

app.listen(PORT, () =>
  console.log(`express server on http://localhost:${PORT}`)
);
