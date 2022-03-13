import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "dotenv/config";

// routes import
import user from "./routes/user.js";
import product from "./routes/product.js";
import category from "./routes/category.js";

// import models
import Product from "./models/product.js";
import Category from "./models/product.js";

// middlewares
import db from "./service/database.js";
import verifyToken from "./service/auth.js";

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.listen(3000, () => {
  db();
  console.log(`Server started at port 3000`);
});

//api routes
app.use(user);
app.use(product);
app.use(category);

// ui routes
app.get("/", (req, res) => {
  res.render("login.ejs");
});
app.get("/index", verifyToken, async (req, res) => {
  var products = await Product.find();
  res.render("index.ejs", { products: products });
});
app.get("/item/:slug", async (req, res) => {
  var product = await Product.findOne({ slug: req.params.slug });
  res.render("product.ejs", { product: product });
});
app.get("/createProduct", verifyToken, async (req, res) => {
  var categories = await Category.find();
  res.render("createProduct.ejs", { categories: categories });
});
app.get("/createCategory", verifyToken, (req, res) => {
  res.render("createCategory.ejs");
});
