import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import dotenv from "dotenv";
import routes from "./server/routes/main.js";
import connectDb from "./server/config/db.js";

dotenv.config();

const app = express();
const port = 3000 || process.env.PORT;

app.use(express.static("public"));

app.use(expressEjsLayouts);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// database connection
connectDb();

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  
});


