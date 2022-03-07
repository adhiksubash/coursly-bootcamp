import mongoose from "mongoose";
import User from "./user.js";
import Category from "./category.js";

const SCHEMA = mongoose.Schema;
const productSchema = new SCHEMA({
  productName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
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
  imageUrl: {
    type: String,
    required: true
  },
  category: {
    type: SCHEMA.Types.ObjectId,
    ref: Category
  },
  creator: {
    type: SCHEMA.Types.ObjectId,
    ref: User
  },
  slug: {
    type: String,
    required: true
  }
});

export default productSchema;
