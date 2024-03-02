import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import dotenv from "dotenv";
import routes from "./server/routes/main.js";
import connectDb from "./server/config/db.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
const port = 3000 || process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(express.json());

app.use(expressEjsLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
// database connection
connectDb();

app.use("/", routes);

app.use((req, res, next) => {
  res.status(404).render("404"); // Render the 404 view
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
