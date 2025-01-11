import mongoose from "mongoose";

const soldUniforms = new mongoose.Schema({
  company: {
    type: String,
  },
  size: {
    type: String,
  },
  category: {
    type: String,
  },
  upperColor: {
    type: String,
  },
  trowserColor: {
    type: String,
  },
  seneiority: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  style: {
    type: String,
  },
  uniformNumberFormat: {
    type: String,
  },
  neckStyle: {
    type: String,
  },
  poomseOrNot: {
    type: String,
  },
});

export const Sold = mongoose.model("Sold", soldUniforms);
