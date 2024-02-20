import express from "express";


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

  export default router;