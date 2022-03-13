import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import "dotenv/config";
import Product from "./product.js";
import User from "./user.js";

const SCHEMA = mongoose.Schema;

const CARTSCHEMA = new SCHEMA({
  prodcutId: {
    type: SCHEMA.Types.ObjectId,
    ref: Product
  },
  userId: {
    type: SCHEMA.Types.ObjectId,
    Ref: User
  }
});

const cart = mongoose.model("cart", CARTSCHEMA);

export default cart;
