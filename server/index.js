/* eslint-disable no-undef */
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import StoryRepo from "./app/repo/story.js";
import StoryController from "./app/controller/story.js";
import StoryRoutes from "./app/routes/story.js";
import StoryMiddleware from "./app/middleware/validator.js";

const app = express();
app.use(cors());
app.use(express.json());

const storyApp = StoryRoutes(
  new StoryController(new StoryRepo()),
  new StoryMiddleware()
);

if (process.env.NODE_ENV === "production") {
  app.get("*", express.static("public"));
} else {
  dotenv.config();
}

app.use("/api/v1/story", storyApp);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
