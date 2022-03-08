import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";
import user from "./routes/user.js";
import db from "./service/database.js";
const app = express();

app.use(bodyParser.json());
app.listen(3000, () => {
  db();
  console.log(`Server started at port 3000`);
});

app.use(user);

// todo : create login route
