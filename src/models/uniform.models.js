import mongoose from "mongoose";

const uniformSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  company: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["A", "A+", "B", "C", "D"],
    required:true,
  },
  upperColor: {
    type: String,
    // required: true,
  },
  trowserColor: {
    type: String,
    // required: true,
  },
  seneiority: {
    type: String,
    // required: true,
  },
  imageUrl: {
    type: String,
    require:true,
  },
  style: {
    type: String,
    // required: true,
  },


});

export const Uniform = mongoose.model("Uniform", uniformSchema);
