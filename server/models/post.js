import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: { type: "string", required: true },

  body: { type: "string", required: true },

  ImageUrl: { type: "string", required: true },

  Category: { type: "string", required: true },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  UpdatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

export default Post;
