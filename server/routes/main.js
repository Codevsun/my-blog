import express from "express";
import post from "../models/post.js";

const router = new express.Router();

router.get("/", async (req, res) => {
  const posts = await post.find();
  res.render("index.ejs", { post: posts });
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
  }
});

router.get("/postDetails/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const posts = await post.findById(postId);
    res.render("postDetails.ejs", { posts });
  } catch (error) {
    console.error(error);
  }
});

router.get("/addPost", (req, res) => {
  res.render("addPosts.ejs");
});

router.post("/addPost", async (req, res) => {
  console.log(req.body);
  try {
    const newPost = new post({
      title: req.body.title,
      body: req.body.description,
      imageUrl: req.body.image,
      category: req.body.category,
    });
    const savedPost = await newPost.save();
    console.log(savedPost); // Optional: Log the saved post to the console
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

export default router;
