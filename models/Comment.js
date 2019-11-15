var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    createdBy: {type: String, required: true},
    body: {type: String, required: true},
    createdOn: {type: Date, required: true}
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;