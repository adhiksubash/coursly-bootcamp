import mongoose from "mongoose";

const SCHEMA = mongoose.Schema;
const userSchema = new SCHEMA({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  streetLine1: {
    type: String,
    required: true
  },
  streetLine2: {
    type: String,
    required: false
  },
  city: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  gender: {
    type: Number,
    required: true
  }
});

export default userSchema;
