import mongoose from "mongoose";
import Recipe from "./models/Recipe.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());

try {
  await mongoose.connect(
    "mongodb://aazainsoomro:muhammad234@ac-oqmbtee-shard-00-00.pzn2wcq.mongodb.net:27017,ac-oqmbtee-shard-00-01.pzn2wcq.mongodb.net:27017,ac-oqmbtee-shard-00-02.pzn2wcq.mongodb.net:27017/appointment-database?ssl=true&replicaSet=atlas-czz53f-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  app.listen(3001, () => {
    "listening...";
  });
  console.log("connected");
} catch (e) {
  console.log(e);
}
