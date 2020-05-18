const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema ({

    user:{
        type: String,
        required: true,
    },

    text:{
        type: String,
        required: true, 
    },

    article: {
        type: String,
        required: true, 
    }

});


const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
