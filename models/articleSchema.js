const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema ({

    headline: {
        type: String, 
        required: true,
    },

    summary: {
        type: String, 
        required: true, 
    },

    link: {
        type: String, 
        required: true, 
    },

    image: {
        type: String,
        
    },

    authors: {
        type: Array,

    }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
