import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/pricing", (req, res) => {
  res.render("pricing.ejs");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
