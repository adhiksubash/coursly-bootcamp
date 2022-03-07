//create express server
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import "dotenv/config";
import { connection, database } from "./service/database.js";
import signup from "./routes/signup.js";

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => {
  console.log(`Server started at port 3000`);
});

async function main() {
  await connection();
}

await main();

app.use("/api/signup", signup);
