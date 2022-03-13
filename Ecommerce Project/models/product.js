import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import "dotenv/config";
import Category from "./category.js";

const SCHEMA = mongoose.Schema;

const PRODUCTSCHEMA = new SCHEMA({
  name: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  supplier: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    required: true
  },
  shortDescription: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  category: {
    type: SCHEMA.Types.ObjectId,
    ref: Category,
    required: true
  }
});

const product = mongoose.model("product", PRODUCTSCHEMA);

export default product;
