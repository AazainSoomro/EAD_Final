import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  ingredients: { type: [String], required: true },
  instructions: { type: [String], required: true },
  image: {
    type: String,
    default: "https://pixlr.com/images/index/ai-image-generator-two.webp",
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
