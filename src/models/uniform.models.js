import mongoose from "mongoose";

const uniformSchema = new mongoose.Schema({
  name: {
    type: String,
    default:
      "Discover the perfect blend of style and quality with our [Product Name]. Designed to bring both elegance and durability into your daily life, this [product type] is crafted from high-quality materials to ensure long-lasting performance. Its sleek design makes it a versatile addition to any space, while the attention to detail ensures a premium feel. Whether for everyday use or special occasions, this product offers the ideal balance of functionality and aesthetic appeal, making it a must-have for those who appreciate both comfort and style.",
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
    required: true,
  },
  upperColor: {
    type: String,
    // required: true,
    default: "white",
  },
  trowserColor: {
    type: String,
    // required: true,
    default: "white",
  },
  seneiority: {
    type: String,
    // required: true,
    default: "Poom",
  },
  imageUrl: {
    type: String,
    // require: true,
  },
  style: {
    type: String,
    // required: true,
    default: "Full Slieve",
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

export const Uniform = mongoose.model("Uniform", uniformSchema);
