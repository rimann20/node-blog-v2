"use strict";

const mongoose = require("mongoose");


// schema to represent blog posts
const blogSchema = mongoose.Schema({
  author: {
    firstName: String,
    lastName: String
  },
  title: {type: String, required: true},
  content: {type: String},
  created: {type: Date, default: Date.now}
});


blogPostSchema.virtual('authorName').get(function() {
  return `${this.author.firstName} ${this.author.lastName}`.trim();
});


// This method will be used to return an object that 
// exposes the fields we want from the underlying data
blogSchema.methods.serialize = function() {
  return {
    id: this._id,
    author: this.authorName,
    content: this.content,
    title: this.title,
    created: this.created
  };
};


const BlogPost = mongoose.model('BlogPost', blogSchema);

module.exports = {BlogPost};

