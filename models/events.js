const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    name: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    link: String,
    details: String,
    createdBy: { type: String, required: true },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    likes: Number[
        {
            type: Schema.Types.ObjectId,
            ref: "Likes"
        }
    ]
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;