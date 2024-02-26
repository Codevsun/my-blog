import express from "express";
import post from "../models/post.js";

const router = new express.Router();
router.get("/", (req, res) => {
  res.render("index.ejs");
});
router.get("/about", (req, res) => {
  res.render("about.ejs");
});

router.get("/pricing", (req, res) => {
  res.render("pricing.ejs");
});
router.get("/posts", async (req, res) => {
  try {
    // Fetch all posts from the database
    const posts = await post.find();

    // Render the posts.ejs file and pass the posts as data
    res.render("posts", { posts: posts });
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).send("Error fetching posts");
  }
});

router.get("/postDetails/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const posts = await post.findById(postId);
    res.render("postDetails.ejs", { posts });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
